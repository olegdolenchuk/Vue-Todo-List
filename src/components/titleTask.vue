<template>
  <section :class="[sectionClass]">This is "{{ title }}"</section>
</template>

<script>
export default {
  name: "titleTask",
  props: {
    title: String,
    sectionClass: String
  },
  data: function() {
    return {};
  }
};
</script>
