<template>
  <el-container class="app-wrapper">
    <el-header height="50px" class="app-header">
      <navbar />
    </el-header>
    <el-container>
      <el-aside v-if="!sidebarRouterHidden && !sidebar.hide" width="200px">
        <sidebar/>
      </el-aside>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'sidebar',
      'sidebarRouters'
    ]),
  },
  data() {
    return {
      sidebarRouterHidden: true
    }
  },
  watch: {
    sidebarRouters: {
      handler(routeList){
        this.sidebarRouterHidden = routeList.every(item=> item.hidden)
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 0;
    width: 100%;
    min-height: calc(100vh - 50px);
    background: #f0f2f5;
  }
  .el-aside{
    padding: 0;
    margin: 0;
    border-radius: 0;
    background-color: #B5B5B5;
  }
}
</style>
