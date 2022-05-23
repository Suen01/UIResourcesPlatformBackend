<template>
    <div class="fileIcon">
        <svg-icon icon-class="file" class="svgIcon" />
        <span class="title">Vue框架</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fileIcon {
    width: 85px;
    height: 85px;
    display: flex;
    flex-direction: column;
    .title{
        font-size: 10px;
        text-align: center;
        margin-right: 8px;
        color: #535353;
    }
    .svgIcon {
        width: 100%;
        height: 100%;
    }
}
</style>