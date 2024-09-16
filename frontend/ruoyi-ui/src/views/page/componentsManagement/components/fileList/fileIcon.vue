<template>
    <div class="fileIcon">
        <svg-icon icon-class="file" class="svgIcon" />
        <span class="title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.fileIcon {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        font-size: 10px;
        margin-right: 8px;
        color: #535353;
    }
    .svgIcon {
        width: 75px;
        height: 75px;
    }
}
</style>