<template>
  <section :class="[sectionClass]">{{ notes }}</section>
</template>

<script>
export default {
  name: "notesTask",
  props: {
    notes: String,
    sectionClass: String
  },
  data: function() {
    return {};
  }
};
</script>
