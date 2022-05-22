<template>
        <div class="app-container">
            <el-card class="box-card">
                <div slot="header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/planResource' }">项目管理</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/download' }">UI资源管理平台</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="file_list" >
                    <div class="file" v-for="list in fileList">
                        <img src="@/assets/plan_icon/file.png" @click="handleCommand(list.title)"/>
                        <h3 class="file_title">{{list.title}}</h3>
                    </div>
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
              handleCommand(title){
                this.$router.push({path:`/detail/${title}`})
              },
              // 取消按钮
              cancel() {
                this.open = false;
                this.reset();
              },
            }
          };
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
       
    
            