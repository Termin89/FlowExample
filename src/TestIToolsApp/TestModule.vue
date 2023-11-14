<template>
  <div class="test-module">
    <h3 class="test-module__title">{{ props.title || "Test module" }}</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  active: boolean
}>();
</script>

<style scoped>
.test-module {
}
</style>
