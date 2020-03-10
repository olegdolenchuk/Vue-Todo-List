import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import List from "../views/List.vue";
import taskGroup from "../views/TaskGroup.vue";
import Task from "../views/Task.vue";
import Edit from "../views/Edit.vue";
import FormAddTask from "../views/FormAddTask.vue";

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
    component: taskGroup
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
