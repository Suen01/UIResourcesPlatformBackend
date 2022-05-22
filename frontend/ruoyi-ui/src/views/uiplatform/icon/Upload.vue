<template>
  <div class="uploadPage">
    <div class="title">上传</div>
    <div class="body">
      <!-- <el-upload
        class="avatar"
        action="#"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus" />
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog> -->
      <div class="avatar">
        <img src="@/assets/ui_icon/picker1.png">
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="6vw">
        <el-form-item label="文件名称" prop="name">
          <el-input v-model="form.name" style="width: 80%" />
        </el-form-item>
        <el-form-item label="所属项目" prop="project">
          <el-select v-model="form.project" style="width: 80%">
            <el-option label="项目1" value="项目1" />
            <el-option label="项目2" value="项目2" />
            <el-option label="项目3" value="项目3" />
          </el-select>
        </el-form-item>
        <el-collapse>
          <el-collapse-item title="样式" name="1">
            <el-radio-group v-model="form.styles">
              <el-radio label="线性">线性</el-radio>
              <el-radio label="面性">面性</el-radio>
              <el-radio label="扁平">扁平</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="类别" name="2">
            <el-radio-group v-model="form.classify">
              <el-radio label="2.5">2.5</el-radio>
              <el-radio label="3d">3d</el-radio>
              <el-radio label="单色">单色</el-radio>
              <el-radio label="多色">多色</el-radio>
              <el-radio label="简约">简约</el-radio>
              <el-radio label="精美">精美</el-radio>
              <el-radio label="手绘">手绘</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="格式" name="3">
            <el-radio-group v-model="form.format">
              <el-radio label="SVG">SVG</el-radio>
              <el-radio label="AI">AI</el-radio>
              <el-radio label="EPS">EPS</el-radio>
              <el-radio label="SK">Sk</el-radio>
              <el-radio label="PNG">PNG</el-radio>
              <el-radio label="GIF">GIF</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="主题" name="4">
            <el-checkbox-group v-model="form.theme">
              <el-checkbox label="海军">海军</el-checkbox>
              <el-checkbox label="陆军">陆军</el-checkbox>
              <el-checkbox label="空军">空军</el-checkbox>
            </el-checkbox-group>
          </el-collapse-item>
        </el-collapse>
        <el-button type="primary" @click="submit('form')">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        project: '',
        styles: '',
        classify: '',
        format: '',
        theme: []
      },
      rules: {
        name: [
          { required: true, message: '请输入文件名称', trigger: 'blur' }
        ],
        project: [
          { required: true, message: '请选择所属项目', trigger: 'blur' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    submit(formName) {
      console.log(this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submitSucess')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
          console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>
<style lang="scss" scoped>
    .uploadPage{
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
        .el-collapse{
            border: 1px solid #808080;
            margin: 30px 15px 30px;
            padding: 15px;
            position: relative;
        }
        .el-collapse::before{
            content:'标签设置';
            position: absolute;
            top: -8px;
            left: 12px;
            background: #fff;
            font-size: 16px;
            width: 68px;
            text-align: center;
            height: 19px;
            line-height: 19px;
        }
        .el-button{
            position: absolute;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .el-radio-group,.el-checkbox-group{
            display: flex;
            width: 100%;
            padding: 0 12px;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .el-radio-group .el-radio,.el-checkbox-group .el-checkbox{
            margin: 5px 0;
            width: 33%;
            display: flex;
            justify-content: flex-start;
        }
    }
</style>
