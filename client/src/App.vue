<template>
  <div id="app" class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'App',
  components: {
    AddTodo,
    Todos
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  width: 500px;
  margin: auto;
  padding-top: 50px;
}
</style>
