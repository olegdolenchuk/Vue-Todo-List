<template>
  <section @click="routerPush" class="btn--add__from">
    <span>+ {{ textButton }}!</span>
  </section>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    linkAddFrom: String,
    textButton: {
      type: String,
      default: "Add New Task"
    }
  },
  methods: {
    routerPush: function() {
      this.$router.push({ path: this.linkAddFrom });
    }
  }
};
</script>

<style lang="scss">
.btn--add__from {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
</style>
