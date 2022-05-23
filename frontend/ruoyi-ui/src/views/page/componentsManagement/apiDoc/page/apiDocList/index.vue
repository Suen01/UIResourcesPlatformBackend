<template>
    <div class="app-container apiDocList">
        <BreadcrumbContent>
            <template slot="header">
                <el-button type="primary">添加</el-button>
                <el-button v-if="showIFrame" @click="reverseBack">返回</el-button>
            </template>
            <DocListItem v-if="!showIFrame" @showDoc="showDoc"/>
            <IFrame v-else :src="iframeUrl"/>
        </BreadcrumbContent>
    </div>
</template>

<script>
import DocListItem from '../../components/docListItem/index.vue';
import IFrame from '@/components/iFrame/index.vue';
export default {
    name: "ApiDocList",
    components: { DocListItem, IFrame },
    data() {
        return {
            showIFrame: false,
            iframeUrl: ''
        }
    },
    methods: {
        /**
         * 显示 iframe
         * @param {*} url 
         */
        showDoc(url) {
            this.iframeUrl = url;
            this.showIFrame = true
        },
        /**
         * 返回
         */
        reverseBack() {
            this.showIFrame = false
        }
    }
}
</script>

<style lang="scss" scoped>
.apiDocList {
    width: 100%;
    height: 100%;
}
</style>