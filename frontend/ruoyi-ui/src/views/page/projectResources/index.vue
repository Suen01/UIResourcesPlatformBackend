<!-- 项目列表 -->
<template>
  <div class="app-container">
      <BreadcrumbContent>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button
              type="primary"
              plain
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
            >新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="danger"
              plain
              icon="el-icon-delete"
              size="mini"
              :disabled="multiple"
              @click="handleDelete"
            >删除</el-button>
          </el-col>
        </el-row>

        <el-table v-loading="loading" :data="projectList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column label="项目名称" prop="proName" width="120" />
          <el-table-column label="软件代号" prop="softwareNum" :show-overflow-tooltip="true" width="150" />
          <el-table-column label="所属型号" prop="belongNum" :show-overflow-tooltip="true" width="150" />
          <el-table-column label="项目领域" prop="proArea" width="100" />
          <el-table-column label="项目类型" prop="proType" width="100" />
          <el-table-column label="项目阶段" prop="proStage" width="100" />
          <el-table-column label="项目负责人" prop="proLead" width="100" />
          <el-table-column label="项目架构" prop="proStruct" width="100" />
          <el-table-column label="项目状态" align="center" width="100">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.proStatus"
                active-value="0"
                inactive-value="1"
                @change="handleStatusChange(scope.row)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="开始时间" align="center" prop="startTime" width="180">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.createTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="结束时间" align="center" prop="endTime" width="180">
                  <template slot-scope="scope">
                    <span>{{ parseTime(scope.row.createTime) }}</span>
                  </template>
          </el-table-column>
          <el-table-column label="操作" align="center"  width="240">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-view"
                  @click="handleCommand(scope.row,'download')"
              >预览</el-button>
              <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-edit"
                  @click="handleUpdate(scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-upload"
                @click="handleCommand(scope.row,'upload')"
              >上传</el-button>

              <el-button
                size="mini"
                type="text"
                icon="el-icon-download"
                @click="handleCommand(scope.row,'download')"
              >下载</el-button>
            </template>
          </el-table-column>
        </el-table>
    
        <pagination
          v-show="total>0"
          :total="total"
          :page.sync="queryParams.pageNum"
          :limit.sync="queryParams.pageSize"
          @pagination="getList"
        />
         <!-- 添加或修改角色配置对话框 -->
         <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
          <div style="height:400px;overflow:auto;">
              <el-form ref="form" :model="form" :rules="rules" label-width="100px">
              <el-form-item label="项目名称" prop="proName">
                  <el-input v-model="form.proName" placeholder="请输入项目名称"/>
              </el-form-item>
              <el-form-item label="软件代号" prop="softwareNum">
                  <el-input v-model="form.softwareNum" placeholder="请输入软件代号"/>
              </el-form-item>
              <el-form-item label="所属型号" prop="belongNum">
                  <el-input v-model="form.belongNum" placeholder="请输入所属型号"/>
              </el-form-item>
              <el-form-item label="项目负责人" prop="proLead">
                  <el-input v-model="form.proLead" placeholder="请输入项目负责人"/>
              </el-form-item>
              <el-form-item label="项目阶段">
                      <el-select v-model="form.proStatus" placeholder="请选择">
                          <el-option key="0" label="未启动" value="0" ></el-option>
                          <el-option key="1" label="进行中" value="1"></el-option>
                          <el-option key="2" label="已结束" value="2"></el-option>
                      </el-select>
              </el-form-item>
              <el-form-item label="项目成员" prop="proLead" >
                  <div class="btn">
                    <el-input v-model="form.proLead" placeholder="请选择"/>
                    <el-button
                      size="mini"
                      @click="selcetUser"
                    >选择成员</el-button>
                  </div>
              </el-form-item>
              <el-form-item label="开始时间">
                      <el-date-picker
                          style="width: 80%"
                          v-model="form.startTime"
                          type="date"
                          placeholder="选择日期">
                      </el-date-picker>
                </el-form-item>
                  <el-form-item label="结束时间">
                      <el-date-picker
                          style="width: 80%"
                          v-model="form.endTime"
                          type="date"
                          placeholder="选择日期">
                      </el-date-picker>
                  </el-form-item>
              </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm">确 定</el-button>
            <el-button @click="cancel">取 消</el-button>
          </div>
        </el-dialog>

        <!--选择成员-->
        <el-dialog title="选择成员" :visible.sync="openUser" width="500px" append-to-body>
            <div style="height:400px;overflow:auto;">
                <el-table v-loading="loading" :data="userList" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" align="center" />
                    <el-table-column label="用户姓名" prop="realName" width="120" />
                    <el-table-column label="用户角色" prop="userRole" :show-overflow-tooltip="true" width="150" />
                  </el-table>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="submitForm">确 定</el-button>
              <el-button @click="cancelUser">取 消</el-button>
            </div>
          </el-dialog>
      </BreadcrumbContent>
  </div>
</template>

<script>
import BreadcrumbContent from '@/components/BreadcrumbContent'
export default {
  components: {BreadcrumbContent},
  data() {
          return {
            // 遮罩层
            loading: false,
            // 选中数组
            ids: [],
            // 非多个禁用
            multiple: true,
            // 总条数
            total: 0,
            // 角色表格数据
            projectList: [{
                id:1,
                proArea:"测试",
                proName:"测试"
            }],
            userList:[],
            // 弹出层标题
            title: "",
            // 是否显示弹出层
            open: false,
            openUser:false,
             // 查询参数
            queryParams: {
                pageNum: 1,
                pageSize: 10,
                roleName: undefined,
                roleKey: undefined,
                status: undefined
            },
            // 表单参数
            form: {},
            defaultProps: {
              children: "children",
              label: "label"
            },
            // 项目类型列表
            proTypeList:[{
                value: '型号项目',
                label: '型号项目'
                }, {
                value: '专业建设',
                label: '专业建设'
            }],
            // 项目领域列表
            proAreaList:[{
                value: '防kongfandao',
                label: '防kongfandao'
                }, {
                value: '防tianchaouhua',
                label: '防tianchaouhua'
            },{
                value: '仿真',
                label: '仿真'
            },{
                value: '后保',
                label: '后保'
            }],
            // 表单校验
            rules: {
              projectName: [
                { required: true, message: "项目名称不能为空", trigger: "blur" }
              ]
            }
          };
      },
      created() {
        //   this.getList();
        },
        methods: {
          /** 查询项目列表 */
          getList() {
            this.loading = true;
            listProject(this.queryParams).then(response => {
                this.projectList = response.rows;
                this.total = response.total;
                this.loading = false;
              }
            );
          },
          // 取消按钮
          cancel() {
            this.open = false;
            this.reset();
          },
          // 表单重置
          reset() {
            if (this.$refs.menu != undefined) {
              this.$refs.menu.setCheckedKeys([]);
            }
            this.form = {
              roleId: undefined,
              roleName: undefined,
              roleKey: undefined,
              remark: undefined
            };
            this.resetForm("form");
          },
          /** 搜索按钮操作 */
          handleQuery() {
            this.queryParams.pageNum = 1;
            this.getList();
          },
          /** 重置按钮操作 */
          resetQuery() {
            this.resetForm("queryForm");
            this.handleQuery();
          },
          // 多选框选中数据
          handleSelectionChange(selection) {
            this.ids = selection.map(item => item.roleId)
            this.single = selection.length!=1
            this.multiple = !selection.length
          },
          /** 新增按钮操作 */
          handleAdd() {
            this.reset();
            this.open = true;
            this.title = "新建项目";
          },
          /** 修改按钮操作 */
          handleUpdate(row) {
            this.reset();
            this.open = true;
            this.title = "修改项目";
            getRole(roleId).then(response => {
              this.form = response.data;
              this.open = true;
              
            });
          },
          selcetUser(){
            this.openUser = true;
          },
          cancelUser(){
            this.openUser = false;
          },
          /** 删除按钮操作 */
          handleDelete(row) {
            const roleIds = row.roleId || this.ids;
            this.$modal.confirm('是否确认删除角色编号为"' + roleIds + '"的数据项？').then(function() {
              return delRole(roleIds);
            }).then(() => {
              this.getList();
              this.$modal.msgSuccess("删除成功");
            }).catch(() => {});
          },
          // 上传、下载操作
          handleCommand(row,command) {
            switch (command) {
              case "upload":
                this.$router.push({path:'upload'})
                break;
              case "download":
                this.$router.push({path:'download'})
                break;
                default:
                break;
            }
          },
        }
}
</script>

<style lang="scss" scoped>
    ::v-deep {
      .el-form-item__content{
        .el-input--medium{
          width: 80%;
        }
        .el-select{
            width: 100%
        }
        .btn{
          display: flex;
          margin-right: 70px
        }
      }
    }
  
  
</style>