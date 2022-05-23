<template>
        <div class="app-container">
            <el-card class="box-card">
                <div slot="header">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/planResource' }">项目管理</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/download' }">UI资源管理平台</el-breadcrumb-item>
                        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div>
                    <el-button type="primary" icon="el-icon-view" size="mini" @click="handleSubmit">预览</el-button>
                    <el-button type="info" icon="el-icon-download" size="mini" @click="handleSubmit">下载</el-button>
                    <el-checkbox v-model="checked">批量下载</el-checkbox>
                </div>
                <div class="file_list" >
                    
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
        computed: {
            title() {
                console.log('route',this.$route);
                
                return this.$route.params.id
            }
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
        handleCommand(){
            this.$router.push({path:'/upload'})
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
        justify-content: space-between;
        .file{
            text-align: center;
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
       
    
            