<template>
    <div class="frameFile">
        <el-divider content-position="left">前端框架</el-divider>
        <ul class="fileList">
            <li class="fileListItem" v-for="item in 3" :key="item" >
                <file-icon @click.native="frameFileClick(item)" />
            </li>
        </ul>
    </div>
</template>

<script>
import fileIcon from './fileIcon.vue'
export default {
    components: { fileIcon },
    name: 'FrameFile',
    methods: {
        frameFileClick(val) {
            this.$emit('frameFileClick', val)
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
            margin-right: 20px;
        }
    }

}
</style>