<template>
  <div class="downloadPage">
    <div class="title">下载</div>
    <div class="body">
      <div class="avatar">
        <img src="@/assets/ui_icon/picker1.png">
        <div><span>尺寸：</span><span>40*40px</span></div>
        <div>图标曾用项目：</div>
      </div>
      <el-form ref="form" :model="form">
        <el-form-item label="下载格式" prop="format">
          <el-select v-model="form.format" style="width: 100%">
            <el-option label="SVG" value="SVG" />
            <el-option label="PNG" value="PNG" />
            <el-option label="AI" value="AI" />
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="download">下载</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: [
        '项目1',
        '项目2',
        '项目3'
      ],
      form: {
        format: ''
      }
    }
  },
  methods: {
    download() {
      console.log('下载', this.form)
      this.$emit('submitSucess')
    }
  }
}
</script>
<style lang="scss" scoped>
    .downloadPage{
        width: 24vw;
        height: 90vh;
        padding-bottom: 13vh;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: scroll;
        position:fixed;
        right:1px;
        top: 13.5vh;
        border: 1px solid #808080;
        background: #fff;
        .title{
            height: 2.3vw;
            line-height: 2.3vw;
            background: #EDEDED;
            padding-left: 1vw;
        }
        .avatar{
            height: 13vw;
            margin:  1vw 0 2vw;
            text-align: center;
            img{
                width: 12.7vw;
                height: 12.7vw;
            }
        }
        .el-form{
            padding: 30px 20px;
        }
        .el-button{
            position: absolute;
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
