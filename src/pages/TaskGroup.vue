<template>
  <div class="page--group__task">
    <buttonAddForm :linkAddFrom="linkAddForm" />
    <Buttons :linkBack="linkBack" :linkEdit="linkEdit" :id="objTaskGroup.id" />
    <titleTask
      v-if="objTaskGroup.name"
      :title="objTaskGroup.name"
      :sectionClass="'title__task'"
    />
    <notesTask
      v-if="objTaskGroup.notes"
      :notes="objTaskGroup.notes"
      :sectionClass="'notes__task'"
    />
    <div v-if="emptyList" class="b--empty">Task List Empty!</div>
    <div
      class="w--list__item"
      v-for="item in objTaskGroup.sublist"
      :key="item.id"
    >
      <itemTaskGroup routerLink="task" :itemList="item" />
    </div>
  </div>
</template>

<script>
import titleTask from "@/components/titleTask.vue";
import notesTask from "@/components/notesTask.vue";
import itemTaskGroup from "@/components/itemTaskGroup.vue";
import Buttons from "@/components/buttons.vue";
import buttonAddForm from "@/components/buttonAdd.vue";

export default {
  name: "TaskGroup",
  components: { titleTask, notesTask, itemTaskGroup, Buttons, buttonAddForm },
  data: function() {
    return {
      linkBack: null,
      linkEdit: null,
      linkAddForm: null,
      objTaskGroup: null
    };
  },
  computed: {
    emptyList: function() {
      if (this.objTaskGroup.sublist.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  created: function() {
    let id = Number(this.$route.params.id);
    this.objTaskGroup = { ...this.$store.getters.getTaskGroup(id) };
    this.linkBack = "/list";
    this.linkEdit = `/edit/${this.$route.params.id}`;
    this.linkAddForm = `/add/${this.$route.params.id}`;
  }
};
</script>

<style lang="scss">
.page--group__task {
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
.title__task {
  text-align: center;
  padding: 18px;
  font-size: 20px;
  font-weight: 800;
  color: #ff0884;
}
.notes__task {
  padding: 0 20px 20px 20px;
  font-size: 14px;
}
.notes__task + .w--list__item,
.notes__task + .b--empty {
  border-top: 1px solid #fff;
}

.checkbox {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 20px auto 0 auto;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: greenyellow;
    transform: scale(0);
    transition: all 0.3s;
  }
  &.active {
    &::after {
      transform: scale(1);
    }
  }
}
</style>
