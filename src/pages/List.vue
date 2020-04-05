<template>
  <div class="page--list">
    <buttonAddForm
      :textButton="'Create New Task Group'"
      :linkAddFrom="linkAddForm"
    />
    <div v-if="emptyList" class="b--empty">Task List Empty!</div>
    <div class="w--list__item" v-for="item in list" :key="item.id">
      <itemTaskGroup routerLink="taskgroup" :itemList="item" />
    </div>
  </div>
</template>

<script>
import itemTaskGroup from "@/components/itemTaskGroup.vue";
import buttonAddForm from "@/components/buttonAdd.vue";

export default {
  name: "ToDo",
  components: { itemTaskGroup, buttonAddForm },
  data: function() {
    return {
      list: null,
      linkAddForm: "/add"
    };
  },
  computed: {
    emptyList: function() {
      if (this.list.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function() {
    this.list = this.$store.getters.getList;
  }
};
</script>

<style lang="scss">
.page--list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #fff;
}
.w--list__item {
  border-bottom: 1px solid #fff;
  &:last-child {
    border: 0;
  }
}

.b--empty {
  font-size: 18px;
  padding: 20px;
  text-align: center;
}
</style>
