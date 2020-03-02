<template>
  <div>
    <div class="todos">
      <div v-for="(todo, index) in allTodos" :key="todo.id" class="todo">
        <p class="text">{{ todo.todo }}</p>
        <p class="trash" @click="onDblClick(index)">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash"
            class="svg-inline--fa fa-trash fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["getTodos", "removeTodo"]),
    onDblClick(todo) {
      this.removeTodo(todo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  }
};
</script>

<style>
.todo:first-child {
  border-top: 1px solid black;
}
.todo {
  border-bottom: 1px solid black;
  padding: 0px 10px;
  display: grid;
  grid-template-columns: 94% 4%;
  grid-column-gap: 2%;
  overflow-wrap: break-word;
}
.trash {
  cursor: pointer;
  color: red;
}
</style>
