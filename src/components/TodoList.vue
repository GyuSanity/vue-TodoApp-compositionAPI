<template>
  <ul>
    <li v-for="(item, index) in props.todoItems" :key="index">{{ item }}</li>
  </ul>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  todoItems: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>
