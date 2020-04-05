import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import List from "../pages/List.vue";
import TaskGroup from "../pages/TaskGroup.vue";
import Task from "../pages/Task.vue";
import Edit from "../pages/Edit.vue";
import FormAddTask from "../pages/FormAddTask.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/taskgroup/:id",
    name: "Task Group",
    component: TaskGroup
  },
  {
    path: "/task/:parentId/:id",
    name: "Task",
    component: Task
  },
  {
    path: "/edit/:parentId",
    name: "Edit",
    component: Edit
  },
  {
    path: "/edit/:parentId/:id",
    name: "Edit",
    component: Edit
  },
  {
    path: "/add/",
    name: "FormAddTask",
    component: FormAddTask
  },
  {
    path: "/add/:id",
    name: "FormAddTask",
    component: FormAddTask
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
