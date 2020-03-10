import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        name: "Текст",
        notes:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        done: false,
        sublist: [
          {
            id: 1,
            parentId: 1,
            name: "Текст Суб",
            notes:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            done: false
          },
          {
            id: 2,
            parentId: 1,
            name: "Текст Суб 2",
            notes: null,
            done: false
          }
        ]
      }
    ]
  },
  mutations: {
    addTaskGroup: (state, payload) => {
      payload.id = state.list.length + 1;
      state.list.push(payload);
    },
    addTask: (state, payload) => {
      state.list.forEach(item => {
        if (item.id === payload.parentId) {
          payload.id = item.sublist.length + 1;
          item.sublist.push(payload);
        }
      });
    },
    changeTaskGroup: (state, payload) => {
      console.log(state);
      console.log(payload);
      state.list.forEach(item => {
        if (item.id === payload.id) {
          item.name = payload.name;
          item.notes = payload.notes;
          item.done = payload.done;
        }
      });
    },
    changeTask: (state, payload) => {
      state.list.forEach(item => {
        if (item.id === payload.parentId) {
          item.sublist.forEach(subitem => {
            if (subitem.id === payload.id) {
              subitem.name = payload.name;
              subitem.notes = payload.notes;
              subitem.done = payload.done;
            }
          });
        }
      });
    },
    delateTaskGroup: (state, id) => {
      state.list.splice(
        state.list.findIndex(function(t) {
          return t.id === id;
        }),
        1
      );
    },
    delateTask: (state, payload) => {
      state.list.forEach(item => {
        if (item.id === payload[1]) {
          item.sublist.splice(
            item.sublist.findIndex(function(t) {
              return t.id === payload[0];
            }),
            1
          );
        }
      });
    }
  },
  actions: {},
  getters: {
    getList: state => {
      return state.list;
    },
    getTaskGroup: state => id => {
      return state.list.find(list => list.id === id);
    },
    getTask: state => (parentId, id) => {
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === parentId) {
          return state.list[i].sublist.find(list => list.id === id);
        }
      }
    }
  }
});
