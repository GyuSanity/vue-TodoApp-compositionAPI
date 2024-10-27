<template>
<<<<<<< HEAD
  <TodoHeader></TodoHeader>
  <TodoInput @InputUpdate="addTodoItem"></TodoInput>
  <TodoList :todoItems="todoItems"></TodoList>
</template>

<script setup>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

import { ref } from "vue";

//data
const todoItems = ref([]);

//method
const addTodoItem = (value) => {
  console.log("Emit is Called", value);
  localStorage.setItem(value, value);

  todoItems.value = fetchTodos();
};

const fetchTodos = () => {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const todoItem = localStorage.key(i);
    result.push(todoItem);
  }
  return result;
};

todoItems.value = fetchTodos();
</script>

<style></style>
=======
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
>>>>>>> f84254d (delete README)
