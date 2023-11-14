<script setup lang="ts">
import { onUpdated, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const name = ref(route.name);
onUpdated(() => {
  name.value = route.name;
});
</script>

<template>
  <h1>{{ name }}</h1>
</template>
