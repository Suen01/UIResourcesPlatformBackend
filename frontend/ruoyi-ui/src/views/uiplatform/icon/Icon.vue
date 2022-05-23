<template>
  <div class="icon-container">
    <el-col :span="2" class="left">
      <div class="title">
        <img src="@/assets/manage/news.png" />
        <span>图标分类导航</span>
      </div>
      <div class="category">
        <div class="top">全部</div>
        <div>
          <div class="classify">
            <img src="@/assets/ui_icon/bookmark.png" />
            <span>样式</span>
          </div>
          <el-radio-group
            v-model="form.styles"
            text-color="#1890FF"
            fill="transparent"
            @change="changeStyle"
          >
            <el-radio-button label="线性"></el-radio-button>
            <el-radio-button label="面性"></el-radio-button>
            <el-radio-button label="扁平"></el-radio-button>
          </el-radio-group>
          <div class="classify">
            <img src="@/assets/ui_icon/bookmark.png" />
            <span>类别</span>
          </div>
          <el-radio-group
            v-model="form.categories"
            text-color="#1890FF"
            fill="transparent"
            @change="changeCategory"
          >
            <el-radio-button label="2.5"></el-radio-button>
            <el-radio-button label="3d"></el-radio-button>
            <el-radio-button label="单色"></el-radio-button>
            <el-radio-button label="多色"></el-radio-button>
            <el-radio-button label="简约"></el-radio-button>
            <el-radio-button label="精美"></el-radio-button>
            <el-radio-button label="手绘"></el-radio-button>
          </el-radio-group>
          <div class="classify">
            <img src="@/assets/ui_icon/bookmark.png" />
            <span>主题</span>
          </div>
          <el-checkbox-group
            v-model="form.themeList"
            text-color="#1890FF"
            fill="transparent"
            @change="changeTheme"
          >
            <el-checkbox-button label="海军"></el-checkbox-button>
            <el-checkbox-button label="陆军"></el-checkbox-button>
            <el-checkbox-button label="空军"></el-checkbox-button>
            <el-checkbox-button label="综合"></el-checkbox-button>
          </el-checkbox-group>
        </div>
      </div>
    </el-col>
    <el-col class="right">
      <div class="topNav">
        <el-input
          v-model="input"
          placeholder="输入检索名称"
          prefix-icon="el-icon-search"
          size="small"
        >
          <img slot="suffix" src="@/assets/ui_icon/book.png">
        </el-input>
        <div class="select" style="margin-top: 1vw;">
          <span class="demonstration">{{ command }}</span>
          <el-dropdown
            placement="bottom"
            style="margin-top: -2px;"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              <i class="el-icon-caret-bottom el-icon--right" style="color: #fff" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="svg">svg</el-dropdown-item>
              <el-dropdown-item command="img">img</el-dropdown-item>
              <el-dropdown-item command="png">png</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="search"></div>
        <div class="user">
          <img src="@/assets/ui_icon/contacts.png">
          <span>我的图标</span>
        </div>
      </div>
      <div class="iconShow">
        <div class="top">
          <el-button size="mini" @click="upload"><img src="@/assets/ui_icon/download.png"><span>上传</span></el-button>
          <el-button size="mini" @click="download"><img src="@/assets/ui_icon/download.png"><span>下载</span></el-button>
          <el-button size="mini"><img src="@/assets/ui_icon/remove.png"><span>删除</span></el-button>
          <el-button size="mini"><img src="@/assets/ui_icon/open.png"><span>添加到项目</span></el-button>
          <el-button size="mini"><img src="@/assets/ui_icon/tickbox.png"><span>批量选择</span></el-button>
        </div>
      </div>
    </el-col>
    <Upload v-if="uploadPageShow" @submitSucess="uploadSucess" />
    <Download v-if="downloadPageShow" @submitSucess="downloadSucess" />
  </div>
</template>
<script>
import Download from './Download.vue'
import Upload from './Upload.vue'
export default {
  components: {
    Upload,
    Download
  },
  data() {
    return {
      form: {
        styles: '',
        categories: '',
        themeList: []
      },
      input: '',
      command: 'svg',
      uploadPageShow: false,
      downloadPageShow: false
    }
  },
  methods: {
    changeStyle(e) {
      this.form.styles = e
      console.log(e)
    },
    changeCategory(e) {
      this.form.categories = e
      console.log(e)
    },
    changeTheme(e) {
      this.form.themeList = e
      console.log(this.form)
    },
    handleCommand(command) {
      this.command = command
      console.log('command', command)
    },
    upload() {
      this.uploadPageShow = true
      console.log('上传')
    },
    uploadSucess() {
      this.uploadPageShow = false
    },
    downloadSucess() {
      this.downloadPageShow = false
    },
    download() {
      this.downloadPageShow = true
    }
  }
}
</script>
<style lang="scss">
.icon-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  .left {
    width: 10.4vw;
    height: 100%;
    .title {
      background-color: #1890ff;
      height: 6vh;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
      font-size: 12px;
      span {
        margin-left: 0.3vw;
      }
    }
    .category {
      background: #eeeeee;
      height: 100%;
      border: 0.05vw solid #b5b5b5;
      .top {
        margin: 2vh 1.1vw 3vh;
        background: #1890ff;
        height: 2.1vh;
        line-height: 2.1vh;
        width: 7.3vw;
        border: 0.05vw solid #808080;
        border-radius: 1vw;
        font-weight: medium;
        font-size: 14px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
      }
      .classify {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.93vw;
        font-weight: bold;
        color: #1890ff;
        padding-left: 1vw;
        img {
          width: 0.93vw;
          height: 0.93vw;
          margin-right: 0.1vw;
        }
      }
      .el-radio-group {
        width: 100%;
        margin: 0.5vw 0;
        .el-radio-button {
          display: block;
          text-align: center;
          .el-radio-button__inner {
            background-color: transparent;
            border: none;
            padding: 8px 20px;
            font-size: 0.83vw;
            font-weight: 500;
            color: #8b8b8b;
          }
        }
      }
      .el-checkbox-group{
        width: 100%;
        margin: 0.5vw 0;
        .el-checkbox-button {
          display: block;
          text-align: center;
          .el-checkbox-button__inner {
            background-color: transparent;
            border: none;
            font-size: 0.83vw;
            font-weight: 500;
            color: #8b8b8b;
          }
        }
      }
    }
  }
  .right {
    .topNav {
      background-image: url("../../../assets/ui_icon/icon_bg.png");
      height: 6vh;
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding:0 2vw 0 1.5vw;
      align-items:center;
      .el-input{
        width:74vw;
        margin-right: 1.5vw;
        .el-input__suffix,.el-input__suffix-inner{
          display: flex;
          align-items: center;
        }
        img{
          width: 1.1vw;
          height: 1.1vw;
        }
      }
      .demonstration {
        display: block;
        color: #fff;
        font-size: 1.1vw;
      }
      .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
      }
      .search{
        background-image: url("../../../assets/ui_icon/Picker.png") ;
        width: 1.5vw;
        height: 1.5vw;
        background-size: cover;
      }
      .user{
        color:#fff;
        font-size: 0.83vw;
        display: flex;
        align-items: center;
        img{
          width: 1.46vw;
          height: 1.46vw;
        }
      }
    }
    .iconShow{
      margin:1vw;
      padding-left: 1vw;
      width: 84vw;
      height: 2.5vw;
      background: url("../../../assets/ui_icon/rectangle.png");
      .el-button{
        margin-top: 0.22vw;
        img{
          width: 0.9vw;
          height: 0.9vw;
          margin-right: 0.3vw;
        }
        span{
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>

