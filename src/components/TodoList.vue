<template>
  <ul>
    <li v-for="(item, index) in props.todoItems" :key="index">
      {{ item }}
      <button @click="delItem(item)">삭제</button>
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

const delItem = (item) => {
  emit("deleteItem", item);
};
</script>

<style></style>
