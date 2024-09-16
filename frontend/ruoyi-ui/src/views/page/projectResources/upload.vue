<template>
  <div class="app-container">
        <BreadcrumbContent>
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
                this.$router.push({path:'/upload'})
                break;
              case "download":
                this.$router.push({path:'/download'})
                break;
                default:
                break;
            }
          },
        }
}
</script>

<style lang="scss" scoped>
    .app-container {
      .resource-item {
        margin-bottom: 10px;
        .title{
          font-size: 16px;
          margin-bottom: 4px;
        }
      }
      ::v-deep {
        .el-card__body {
          height: 80vh;
          overflow: auto;
          padding:15px 10px 0px 30px;
        }
        .el-upload {
          .el-upload-dragger{
              width: 85vw;
              background-color: #f3f3f3;
          }
        }
      }
      .btn{
          float: right
      }
    }
    
</style>