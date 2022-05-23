<template>
  <div class="addComponents">
    <el-form :model="fromData" :rules="rules" label-width="120px">
      <el-col :span="8">
        <el-form-item label="组件名" prop="comName">
          <el-input v-model="fromData.comName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="组件类型">
          <el-select v-model="fromData.comType">
            <el-option value="Vue2">Vue2</el-option>
            <el-option value="Vue3">Vue3</el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="上传人">
          <el-input v-model="fromData.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="详情介绍">
          <el-input
            v-model="fromData.particulars"
            type="textarea"
            style="width: 100%"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="文件上传(.zip)">
          <FileUpload :fileType="['zip']" :limit="1" :fileSize="2048" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="预览图上传">
          <ImageUpload />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="示例代码">
          <editor
            style="height: 200px"
            v-model="fromData.code"
            lang="javascript"
            :options="editorOptions"
            theme="chrome"
            @init="editorInit"
          ></editor>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-table :data="fromData.apiData" style="width: 100%">
          <el-table-column prop="param" label="参数" width="180" align="center">
            <template slot-scope="{ row }">
              <el-input v-model="row.param" />
            </template>
          </el-table-column>
          <el-table-column
            prop="explain"
            label="说明"
            width="180"
            align="center"
          >
            <template slot-scope="{ row }">
              <el-input v-model="row.explain" />
            </template>
          </el-table-column>
          <el-table-column prop="type" label="类型" align="center">
            <template slot-scope="{ row }">
              <el-input v-model="row.type" />
            </template>
          </el-table-column>
          <el-table-column prop="optional" label="可选值" align="center">
            <template slot-scope="{ row }">
              <el-input v-model="row.optional" />
            </template>
          </el-table-column>
          <el-table-column prop="default" label="默认值" align="center">
            <template slot-scope="{ row }">
              <el-input v-model="row.default" />
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="{ row, $index }">
              <el-button
                v-show="fromData.apiData.length - 1 === $index"
                icon="el-icon-plus"
                @click="apiAdd(row, $index)"
              ></el-button>
              <el-button
                icon="el-icon-minus"
                @click="apiDelete(row, $index)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-form>
    <el-col :span="24">
      <el-button class="submit" type="primary" @click="submit">提交</el-button>
    </el-col>
  </div>
</template>

<script>
import Editor from "vue2-ace-editor";
export default {
  name: "AddComponents",
  components: { Editor },
  props: {
    addItem: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    addItem(newVal) {
      this.fromData.type = newVal.label;
    },
  },
  data() {
    return {
      rules: {
        comName: [{ required: true, message: "请输入组件名", trigger: "blur" }],
      },
      editorOptions: {
        // 设置代码编辑器的样式
        enableBasicAutocompletion: true, //启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, //启用实时自动完成
        tabSize: 2, //标签大小
        fontSize: 14, //设置字号
        showPrintMargin: false, //去除编辑器里的竖线
      },
      fromData: {
        comName: "",
        comType: "",
        name: "",
        type: "",
        particulars: "",
        code: "",
        apiData: [
          {
            param: "",
            explain: "",
            type: "",
            optional: "",
            default: "",
          },
        ],
      },
    };
  },
  methods: {
    editorInit() {
      require("brace/theme/chrome");
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/yaml");
      require("brace/mode/json");
      require("brace/mode/less");
      require("brace/snippets/json");
      require("brace/mode/lua");
      require("brace/snippets/lua");
      require("brace/mode/javascript");
      require("brace/snippets/javascript");
    },
    /**
     * 增加api
     */
    apiAdd() {
      const obj = {
        param: "",
        explain: "",
        type: "",
        optional: "",
        default: "",
      };
      this.fromData.apiData.push(obj);
    },
    apiDelete(item, index) {
      this.fromData.apiData.splice(index, 1);
    },
    submit() {
      console.log(this.fromData)
    }
  },
};
</script>

<style lang="scss" scoped>
.submit{
  margin: 10px 10px 10px 0;
  float: right;
}
</style>