<template>
    <div class="docListItem">
        <div class="docListItemLeft">
            <span class="docListItemImg">
                <img src="@/assets/images/profile.jpg" alt="">
            </span>
            <span class="docListItemTitle">
                Element2.0文档
            </span>
        </div>
        <div class="docListItemRight">
            <el-button type="primary" @click="showDoc">查看</el-button>
            <el-button type="warning" @click="targetLink">外链查看</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showDoc() {
            this.$emit('showDoc', 'https://element.eleme.cn/#/zh-CN')
        },
        targetLink() {
            window.open('https://element.eleme.cn/#/zh-CN','blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.docListItem {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    padding: 0 20px 0 5px ;
    .docListItemLeft{
        // width: 50px;
        height: 40px;
        display: flex;
        align-items: center;
        .docListItemImg{
            width: 50px;
            height: 50px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .docListItemTitle{
            padding-left: 5px;
        }
    }
}
</style>