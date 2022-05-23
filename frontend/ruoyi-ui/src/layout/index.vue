<template>
<<<<<<< HEAD
  <el-container class="app-wrapper">
    <el-header height="50px" class="app-header">
      <navbar />
    </el-header>
    <el-container>
      <transition name="fade-aside-transform" mode="out-in">
      <el-aside v-if="!sidebarRouterHidden && !sidebar.hide" width="200px">
        <sidebar/>
      </el-aside>
      </transition>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
=======
  <div class="app-wrapper">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <img src="@/assets/manage/shareIcon.png" />
          <span>资源管理平台</span>
        </div>
        <el-menu
          :default-active="activeIndex"
          class="navButton"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/planResource">项目资源</el-menu-item>
          <el-menu-item index="/icon">图标资源</el-menu-item>
          <el-menu-item index="/index">切图资源</el-menu-item>
          <el-menu-item index="/threedim">三维模型</el-menu-item>
          <el-menu-item index="/component">组件管理</el-menu-item>
          <el-menu-item index="/tool">工具管理</el-menu-item>
          <el-menu-item index="/user">用户管理</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <img src="@/assets/manage/notify.png" />
        <img src="@/assets/manage/contacts.png" />
        <img src="@/assets/manage/share.png" />
      </div>
    </div>
    <app-main />
  </div>
>>>>>>> f3438530270daa80bd6dd76a200384b577b0d576
</template>

<script>
// import RightPanel from "@/components/RightPanel";
import { AppMain } from './components'
// import ResizeMixin from "./mixin/ResizeHandler";
// import { mapState } from "vuex";
// import variables from "@/assets/styles/variables.scss";

export default {
  name: 'Layout',
  components: {
    AppMain
  },
  data() {
    return {
      activeIndex: '/planResource'
    }
  },
  mounted() {
    this.$router.push({ path: '/planResource' })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      // this.$router.push({path: key})
    }
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.app-wrapper{
  background: #f0f2f5;
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 0;
    width: 100%;
    min-height: calc(100vh - 50px);
    
=======
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .nav {
    padding: 0 1vw;
    height: 5.6vh;
    background-color: #001529;
    display: flex;
    justify-content: space-between;
    color: white;
    .left {
      display: flex;
      justify-content: space-between;
      color: white;
      .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 2vw;
          height: 2vw;
        }
        span {
          line-height: 3.1vw;
          margin-left: 0.5vw;
          font-size: 1.25vw;
        }
      }
      .navButton {
        margin-left: 1.2vw;
      }
    }
    .right {
      width: 4.8vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 1.2vw;
        height: 1.2vw;
      }
    }
  }
  .el-menu {
    background-color: transparent;
>>>>>>> f3438530270daa80bd6dd76a200384b577b0d576
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
    height: 4.6vh;
    line-height: 4.6vh;
    width: 7.3vw;
    text-align: center;
    font-size: 0.83vw;
    margin-top: 1vh;
    color: #fff !important;
    border: 0.05vw solid transparent;
  }
  .el-menu-item.is-active {
    background-color: #1890ff !important;
  }
  .el-menu-item:hover {
    border: 0.05vw solid #1890ff;
    background-color: transparent;
  }
  .el-menu.el-menu--horizontal{
    border-bottom:none;
  }
}
</style>
