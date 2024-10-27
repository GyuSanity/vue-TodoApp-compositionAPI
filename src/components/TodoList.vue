<template>
  <ul>
    <li v-for="(item, index) in props.todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="delItem(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script setup>
//import { defineProps } from "vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["deleteItem"]);
const props = defineProps({
  todoItems: {
    type: Array,
    required: true,
  },
});

const delItem = (item, index) => {
  emit("deleteItem", item, index);
};
</script>

<style></style>
