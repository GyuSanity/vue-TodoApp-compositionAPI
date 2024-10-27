<template>
  <!-- 
  option API - emit
  https://joshua1988.github.io/vue-camp/vue/event-emit.html#%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5
  composition API - emit
  https://joshua1988.github.io/vue-camp/composition/event-emit.html#%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-%E1%84%87%E1%85%A1%E1%86%AF%E1%84%89%E1%85%A2%E1%86%BC
  -->
  <TodoHeader></TodoHeader>
  <TodoInput @InputUpdate="addTodoItem"></TodoInput>
  <TodoInput @InputUpdate="addTodoItem"></TodoInput>
  <!-- <TodoList :프롭스이름="상위 컴포넌트의 데이터 이름"></TodoList> -->
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
