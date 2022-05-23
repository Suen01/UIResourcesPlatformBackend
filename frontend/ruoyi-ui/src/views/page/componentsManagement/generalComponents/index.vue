<!-- 通用组件管理 -->
<template>
  <div class="app-container generalComponents">
    <el-row :gutter="20">
      <!--部门数据-->
      <el-col :span="4" :xs="24">
        <el-card class="card">
          <comItem
            v-for="(item, index) in treeData"
            :class="{ active: index === activeIndex }"
            :key="index"
            :item="item"
            itemKey="label"
            @click.native="comItemClick(item, index)"
          />
        </el-card>
      </el-col>
      <el-col :span="20" :xs="24">
        <BreadcrumbContent v-show="BreadcrumbContentShow">
          <template slot="header">
            <el-button type="primary" @click="statusVisibleClick">
              {{ statusVisible === 1 ? '添加' : '返回' }}
            </el-button>
          </template>
            <FileList v-show="statusVisible === 1" v-for="(item, index) in list" :key="index" :item="item" @fileListClick="fileListClick"/>
            <addComponents v-show="statusVisible === 2" :addItem="addItem"/>
            <div v-show="statusVisible === 3">组件显示界面</div>
        </BreadcrumbContent>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import comItem from "./components/comItem/index";
import FileList from '../components/fileList/index'
import addComponents from './components/addComponents/index'
export default {
  name: "GeneralComponents",
  components: { comItem, FileList, addComponents },
  data() {
    return {
      statusVisible: 1,
      BreadcrumbContentShow: false,
      activeIndex: "",
      addItem: {},
      treeData: [
        {
          label: 'Web'
        },
        {
          label: 'Qt'
        }
      ],
      list: [
        {
          title: '火箭军通用模块',
          list: [
            {
              title: '雷达图'
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {
    statusVisibleClick() {
      if(this.statusVisible === 1) {
        this.statusVisible = 2
      }else {
        this.statusVisible = 1
      }
    },
    /**
     * 切换变色
     */
    comItemClick(item, index) {
      this.activeIndex = index;
      this.addItem = item
      this.BreadcrumbContentShow = true
    },
    fileListClick(item) {
      this.statusVisible = 3
      console.log(item)
    }
  },
};
</script>

<style lang="scss" scoped>
.active {
  background: #ccc;
}
.generalComponents {
  width: 100%;
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
  .card {
    height: 100%;
    overflow-y: auto;
  }
}
</style>