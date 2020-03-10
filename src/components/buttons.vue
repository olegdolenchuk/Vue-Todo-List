<template>
  <section class="btns--group__task">
    <div @click="routerPushBack" class="btn">
      <span>← Back</span>
    </div>
    <div v-if="showEditButton" @click="routerPushEdit" class="btn">
      <span>✎ Edit</span>
    </div>
    <div v-if="showDelButton" @click="togglePopUp" class="btn">
      <span>× Delete</span>
    </div>
    <div class="overlay"></div>
    <div class="popup">
      <strong>Are you sure you want to delete this?</strong>
      <div class="w--buttons">
        <button class="yes" @click="removeTask(id, parentId)">Yes</button>
        <button class="no" @click="togglePopUp">No</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    linkBack: String,
    linkEdit: String,
    id: Number,
    parentId: Number,
    showEditButton: {
      type: Boolean,
      default: true
    },
    showDelButton: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {};
  },
  methods: {
    togglePopUp: function() {
      let overlay = document.querySelector(".overlay");
      overlay.classList.toggle("active");
    },
    removeTask: function(...id) {
      let arrIds = [...id];
      if (typeof arrIds[0] === "number" && typeof arrIds[1] === "number") {
        this.$store.commit("delateTask", arrIds);
        this.$router.push({ path: `/taskgroup/${arrIds[1]}` });
      }
      if (typeof arrIds[0] === "number" && typeof arrIds[1] === "undefined") {
        this.$store.commit("delateTaskGroup", arrIds[0]);
        this.$router.push({ path: `/list` });
      }
    },
    routerPushBack: function() {
      this.$router.push({ path: this.linkBack });
    },
    routerPushEdit: function() {
      this.$router.push({ path: this.linkEdit });
    }
  },
  mounted: function() {
    let countButtons = document.querySelector(".btns--group__task");
    if (countButtons.children.length < 4) {
      countButtons.classList.add("one");
    }
  }
};
</script>

<style lang="scss">
.btns--group__task {
  display: flex;
  border-bottom: 1px solid #fff;
  > .btn {
    padding: 20px;
    color: #fff;
    background: transparent;
    border: 0;
    font-size: 14px;
    width: 33.333%;
    display: flex;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    border-right: 1px solid #fff;
  }
  > .btn:last-child {
    border-right: 0;
  }
  &.one {
    .btn {
      width: 100%;
      border: 0;
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  z-index: 77;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    visibility: visible;
    opacity: 0.95;
  }
}

.popup {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  margin: auto;
  top: 0;
  max-width: 500px;
  width: 100%;
  height: 200px;
  background: #fff;
  z-index: 99;
  color: #111;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-300px);
  transition: all 0.3s;
  strong {
    font-size: 20px;
    letter-spacing: 1px;
  }
  .w--buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    button {
      width: 150px;
      height: 40px;
      border: 2px solid #111;
      background: transparent;
      font-size: 18px;
      margin: 0 15px;
      cursor: pointer;
      letter-spacing: 1px;
      &.yes {
        background: greenyellow;
        color: #111;
      }
      &.no {
        background: red;
        color: #fff;
      }
    }
  }
}

.overlay.active + .popup {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}
</style>
