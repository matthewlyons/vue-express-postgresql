<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" name="todo" id="todoForm" v-model="todo" placeholder="Add Todo" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      if (this.todo.length > 150) {
        alert("ToDo is too long.");
      } else {
        this.addTodo(this.todo);
        this.todo = "";
      }
    }
  }
};
</script>

<style>
input {
  width: 466px;
  padding: 10px 15px;
  margin-bottom: 10px;
}
</style>
