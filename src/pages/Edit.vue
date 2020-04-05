<template>
  <div class="page--group__task">
    <Buttons
      :linkBack="linkBack"
      :linkEdit="linkEdit"
      :showDelButton="false"
      :showEditButton="false"
    />
    <form @submit="submitForm" action="#" class="w--form">
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
      objTask: null
    };
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      let parentId = Number(this.$route.params.parentId);
      let id = Number(this.$route.params.id);
      if (!this.objTask.name) {
        alert("Erorr");
      } else {
        if (!isNaN(parentId) && !isNaN(id)) {
          this.$store.commit("changeTask", this.objTask);
        } else {
          this.$store.commit("changeTaskGroup", this.objTask);
        }
        document.querySelector(".w--form").classList.add("save");
        setTimeout(() => {
          document.querySelector(".w--form").classList.remove("save");
        }, 500);
      }
    }
  },
  created: function() {
    let parentId = Number(this.$route.params.parentId);
    let id = Number(this.$route.params.id);
    if (!isNaN(parentId) && !isNaN(id)) {
      this.objTask = { ...this.$store.getters.getTask(parentId, id) };
      this.linkBack = `/task/${parentId}/${id}`;
    } else {
      this.objTask = { ...this.$store.getters.getTaskGroup(parentId) };
      this.linkBack = `/taskgroup/${parentId}`;
    }
  }
};
</script>

<style lang="scss">
.w--form {
  display: flex;
  flex-direction: column;
  background: transparent;
  transition: all 0.3s;
  input,
  textarea,
  button {
    padding: 20px;
    background: transparent;
    color: #fff;
    font-family: "Courier New", Courier, monospace;
    border: 0;
    font-size: 14px;
    outline: none;
  }
  textarea {
    margin-bottom: 20px;
    padding-top: 0;
  }
  input[name="name"] {
    font-size: 20px;
    font-weight: 800;
    color: #ff0884;
    text-align: center;
  }
  button {
    padding: 20px;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top: 1px solid #fff;
    cursor: pointer;
  }
  &.save {
    background: rgba($color: #49f21a, $alpha: 0.3);
    input[name="name"] {
      color: #fff;
    }
  }
}
</style>
