<template>
  <section :class="[sectionClass]">{{ notes }}</section>
</template>

<script>
export default {
  name: "notesTask",
  props: {
    notes: String,
    sectionClass: String
  }
};
</script>
