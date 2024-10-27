<template>
  <input type="text" v-model="todoInput" />
  <button @click="addTodo">추가</button>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const todoInput = ref("");
const emit = defineEmits(["InputUpdate"]);
const clearTodo = () => (todoInput.value = "");
const addTodo = () => {
  emit("InputUpdate", todoInput.value);
  clearTodo();
};
</script>

<style></style>
