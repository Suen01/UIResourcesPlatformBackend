<!-- api文档 -->
<template>
  <div class="app-container apiDoc">
    <BreadcrumbContent>
      <template slot="header">
        <el-button type="primary">上传</el-button>
      </template>
      <FileList v-for="(item, index) in list" :key="index" :item="item" @fileListClick="fileListClick"></FileList>
    </BreadcrumbContent>
  </div>
</template>

<script>
import FileList from '../components/fileList/index'
export default {
  components: { FileList },
  data() {
    return {
      list: [
        {
          title: '前端框架',
          list: [
            {
              title: 'Vue_2.0'
            },
            {
              title: 'Vue_3.0'
            },
            {
              title: 'React_16.2'
            }
          ]
        },
        {
          title: 'JAVA框架',
          list: [
            {
              title: 'Spring boot1.0'
            },
            {
              title: 'Spring boot1.0'
            },
            {
              title: 'Spring boot1.0'
            }
          ]
        }
      ]
    }
  },
  methods: {
    fileListClick(val) {
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