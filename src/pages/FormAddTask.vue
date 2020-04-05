<template>
  <div class="page--group__task">
    <Buttons
      :linkBack="linkBack"
      :linkEdit="linkEdit"
      :showEditButton="false"
      :showDelButton="false"
    />
    <h1 class="h1--title">{{ textForm }}</h1>
    <form @submit="submitForm" action="#" class="w--form form--add">
      <input
        type="text"
        v-model="objTask.name"
        name="name"
        autofocus
        placeholder="Name"
      />
      <textarea
        v-model="objTask.notes"
        name="notes"
        placeholder="Notes"
      ></textarea>
      <button class="">Save</button>
    </form>
  </div>
</template>

<script>
import Buttons from "@/components/buttons.vue";

export default {
  name: "Edit",
  components: { Buttons },
  data: function() {
    return {
      linkBack: null,
      linkEdit: null,
      groupId: null,
      objTask: null,
      textForm: null
    };
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      if (!this.objTask.name) {
        alert("Erorr");
      } else {
        if (this.groupId != null || this.groupId != undefined) {
          this.$store.commit("addTask", { ...this.objTask });
          this.$router.push({ path: `/taskgroup/${this.$route.params.id}` });
        } else {
          this.$store.commit("addTaskGroup", { ...this.objTask });
          this.$router.push({ path: `/list` });
        }
      }
    }
  },
  created: function() {
    let id = Number(this.$route.params.id);
    if (!isNaN(id)) {
      this.groupId = id;
      this.linkBack = `/taskgroup/${id}`;
      this.objTask = {
        id: null,
        parentId: id,
        name: null,
        notes: null,
        done: false
      };
      this.textForm = "Add New Task";
    } else {
      this.linkBack = `/list`;
      this.objTask = {
        id: null,
        name: null,
        notes: null,
        done: false,
        sublist: []
      };
      this.textForm = "Create New Task Group";
    }
  }
};
</script>

<style lang="scss">
.h1--title {
  font-size: 20px;
  margin: 0;
  line-height: 1;
  padding: 20px;
  text-align: center;
  font-weight: 400;
  background: #fff;
  color: #222;
}
.form--add {
  *,
  input[name="name"] {
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
  }
  input[name="name"] {
    border-bottom: 1px solid #fff;
  }
  textarea {
    padding-top: 20px;
  }
  button {
    text-align: center;
  }
}
</style>
