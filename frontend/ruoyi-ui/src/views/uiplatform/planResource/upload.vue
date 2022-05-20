<template>
    <div class="app-container">
        <el-card class="box-card">
            <div slot="header">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>项目管理</el-breadcrumb-item>
                    <el-breadcrumb-item>UI资源管理平台</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div v-for="list in resourceList" :key="list" class="resource-item">
                <div class="title">{{list.title}}</div>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>   
            </div>
            <div class="btn">
                <el-button
                    type="primary"
                    size="mini"
                    @click="handleSubmit"
                  >提交</el-button>
            </div>
        </el-card>
    </div>
</template>
      
<script>
import { listRole, getRole, delRole, addRole, updateRole, dataScope, changeRoleStatus } from "@/api/system/role";
      
export default {
    name: "Role",
    dicts: ['sys_normal_disable'],
    data() {
          return {
            // 遮罩层
            loading: false,
            // 列表数据
            resourceList: [{id:1,title:'原型设计文档'},{id:2,title:'HTML'},{id:3,title:'CSS'}]
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
            getRole(roleId).then(response => {
              this.form = response.data;
              this.open = true;
              this.title = "修改角色";
            });
          },
          /** 分配用户操作 */
          handleAuthUser: function(row) {
            const roleId = row.roleId;
            this.$router.push("/system/role-auth/user/" + roleId);
          },
          /** 提交按钮（数据权限） */
          submitDataScope: function() {
            if (this.form.roleId != undefined) {
              dataScope(this.form).then(response => {
                this.$modal.msgSuccess("修改成功");
                this.getList();
              });
            }
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
        }
      };
</script>
<style lang="scss" scoped>
.app-container{
    .resource-item{
        margin-bottom: 10px;
    }
    .el-card__body .el-upload-dragger{
        width:90vw
    }
    .btn{
        float: right
    }

}
</style>
   

        