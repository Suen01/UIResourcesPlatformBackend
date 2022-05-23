<template>
    <div class="breadcrumbContent">
        <div class="content">
            <header class="contentHeader">
                <Breadcrumb />
                <div class="breadcrumbContent-operation">
                    <slot name="header"/>
                </div>
            </header>
            <div class="contentMain">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/index'
export default {
    name: 'BreadcrumbContent',
    components: { Breadcrumb }
}
</script>
<style lang="scss" scoped>
.breadcrumbContent {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #fff;
    
    .content {
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        border-radius: 10px;
        height: 100%;

        .contentHeader{
            height: 50px;
            border-bottom: 1px solid #CECECE;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .breadcrumbContent-operation{
                padding-right: 5px;
            }
        }
        .contentMain{
            width: 100%;
            height: calc(100% - 50px);
            padding: 10px;
            overflow-y: auto;
        }
    }
}
</style>