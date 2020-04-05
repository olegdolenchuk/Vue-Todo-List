<template>
  <div class="page--group__task">
    <Buttons
      :linkBack="linkBack"
      :linkEdit="linkEdit"
      :id="objTask.id"
      :parentId="objTask.parentId"
    />
    <div
      @click="changeDone"
      class="checkbox"
      :class="{ active: objTask.done }"
    ></div>
    <titleTask
      v-if="objTask.name"
      :title="objTask.name"
      :sectionClass="'title__task'"
    />
    <notesTask
      v-if="objTask.notes"
      :notes="objTask.notes"
      :sectionClass="'notes__task'"
    />
  </div>
</template>

<script>
import titleTask from "@/components/titleTask.vue";
import notesTask from "@/components/notesTask.vue";
import Buttons from "@/components/buttons.vue";

export default {
  name: "Task",
  components: { titleTask, notesTask, Buttons },
  data: function() {
    return {
      linkBack: null,
      linkEdit: null,
      objTask: null
    };
  },
  methods: {
    changeDone: function() {
      this.objTask.done = !this.objTask.done;
      this.$store.commit("changeTask", this.objTask);
    }
  },
  created: function() {
    let parentId = Number(this.$route.params.parentId);
    let id = Number(this.$route.params.id);
    this.objTask = { ...this.$store.getters.getTask(parentId, id) };
    this.linkBack = `/taskgroup/${this.$route.params.parentId}`;
    this.linkEdit = `/edit/${this.$route.params.parentId}/${this.$route.params.id}`;
  }
};
</script>
