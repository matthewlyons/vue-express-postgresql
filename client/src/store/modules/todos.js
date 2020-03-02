import axios from 'axios';

const state = {
  todos: []
};
const getters = {
  allTodos: (state) => state.todos
};
const actions = {
  async getTodos({ commit }) {
    let { data } = await axios.get('/api/todos');
    commit('setTodos', data);
  },
  async addTodo({ commit }, todo) {
    let { data } = await axios.post('/api/todos', {
      todo
    });
    commit('addTodo', data);
  },
  async removeTodo({ commit }, todo) {
    axios
      .delete(`/api/todos/${state.todos[todo].id}`)
      .then(() => {
        commit('removeTodo', todo);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => {
    state.todos.push(todo[0]);
  },
  removeTodo: (state, todo) => {
    state.todos.splice(todo, 1);
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
