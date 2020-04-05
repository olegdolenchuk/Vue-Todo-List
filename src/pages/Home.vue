<template>
  <div class="page--home">
    <h1 class="title--hi">Hi my Friend, here are your tasks!</h1>
    <router-link to="/list" class="btn--enter">
      <span>Enter →</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
#app {
  padding: 15px;
}
.page--home {
  padding: 0 20px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title--hi {
    line-height: 1.4;
    font-size: 26px;
    margin-bottom: 20px;
  }
  .btn--enter {
    position: relative;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    height: 48px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    transition: all 0.45s;
    span {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateX(100%);
      background: #fff;
      transition: all 0.3s;
      z-index: 1;
    }
    &:hover {
      color: #222;
      &::after {
        transform: translateX(0);
      }
    }
  }
}
</style>
