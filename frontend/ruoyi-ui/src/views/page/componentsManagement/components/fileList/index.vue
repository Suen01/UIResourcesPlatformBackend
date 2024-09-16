<template>
    <div class="frameFile">
        <el-divider content-position="left">{{item.title}}</el-divider>
        <ul class="fileList">
            <li class="fileListItem" v-for="(listItem, index) in item.list" :key="index" >
                <file-icon @click.native="fileListClick(listItem)" :title="listItem.title"/>
            </li>
        </ul>
    </div>
</template>

<script>
import fileIcon from './fileIcon.vue'
export default {
    name: 'FileList',
    props: {
        item: {
            type: Object,
            default: ()=> {}
        }
    },
    components: { fileIcon },
    methods: {
        fileListClick(val) {
            this.$emit('fileListClick', val)
        }
    }
}
</script>

<style lang="scss" scoped>
.frameFile {
    height: auto;
    clear: both;
    padding: 5px;

    .fileList {
        display: inline-block;
        .fileListItem {
            float: left;
            margin-right: 30px;
        }
    }

}
</style>