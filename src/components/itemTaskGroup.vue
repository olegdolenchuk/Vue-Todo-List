<template>
  <div @click="routerPush" class="list__item" :class="{ done: itemList.done }">
    <span class="icon" v-if="itemList.parentId && !itemList.done">→</span>
    {{ itemList.name }}
  </div>
</template>

<script>
export default {
  name: "itemToDo",
  props: {
    itemList: Object,
    routerLink: String
  },
  methods: {
    routerPush: function() {
      if (this.itemList.parentId) {
        this.$router.push({
          path: `/${this.routerLink}/${this.itemList.parentId}/${this.itemList.id}`
        });
      } else {
        this.$router.push({ path: `/${this.routerLink}/${this.itemList.id}` });
      }
    }
  }
};
</script>

<style lang="scss">
.list__item {
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  .icon {
    position: relative;
    top: -2px;
    margin-right: 8px;
  }
  &.done {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 18px;
      right: 18px;
      height: 2px;
      background-color: greenyellow;
    }
  }
}
</style>
