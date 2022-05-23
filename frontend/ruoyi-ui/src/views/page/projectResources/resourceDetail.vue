<template>
  <div class="app-container">
        <BreadcrumbContent>
            <div class="file_list" >
                    <div class="file" v-for="list in fileList">
                        <img src="@/assets/project_icon/file.png" @click="handleCommand(list.title)"/>
                        <h3 class="file_title">{{list.title}}</h3>
                    </div>
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
                fileList: [{id:1,title:'原型设计文档'},{id:2,title:'切图库'},{id:3,title:'图标库'},{id:3,title:'三维模型'}]
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
        .app-container{
            .file_list{
                display: flex;
                justify-content: flex-start;
                .file{
                    text-align: center;
                    margin-right: 16vw;
                    img{
                        width:4.5vw;
                        height: 4.5vw;
                    }
                    h3{
                        font-size: 14px;
                    }
                }
                
            }
            ::v-deep {
                .el-card__body{
                    height:80vh
                }
            }
        }
</style>
           