<!-- api文档 -->
<template>
  <div class="app-container apiDoc">
    <!-- api文档
      <IFrame src="https://element.eleme.cn/#/zh-CN"></IFrame> -->
    <BreadcrumbContent>
      <template slot="header">
        <el-button type="primary">添加</el-button>
      </template>
      <FrameFile v-for="item in 3" :key="item" @frameFileClick="frameFileClick"></FrameFile>
    </BreadcrumbContent>
  </div>
</template>

<script>
// import IFrame from '@/components/iFrame/index.vue';
import FrameFile from './components/frameFile/index.vue'
export default {
  components: { FrameFile },
  // components: { IFrame }
  methods: {
    frameFileClick(val) {
      console.log(val)
      this.$router.push('apiDocList')
    }
  }
}
</script>

<style lang="scss" scoped>
.apiDoc {
  width: 100%;
  height: 100%;
}
</style>