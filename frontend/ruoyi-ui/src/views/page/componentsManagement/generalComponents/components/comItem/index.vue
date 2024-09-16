<template>
  <div class="comItem" ref="comItem">
    <span class="comItemLabel">
      {{ item[itemKey] }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ComItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    itemKey: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.comItem {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #ccc;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    background-color: rgb(226, 226, 226);
  }
  .comItemLabel {
    padding-left: 10px;
  }
}
</style>