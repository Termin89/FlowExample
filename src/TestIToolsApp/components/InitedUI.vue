<template>
  <div class="inited-ui">
    <div class="inited-ui__group">
      <button class="inited-ui__init">Init</button>
    </div>
    <div class="inited-ui__group">
      <label
        v-for="state in states"
        :key="state"
        :for="state"
        class="inited-ui__radio"
      >
        <input
          type="radio"
          v-model="value"
          :id="state"
          :value="state"
          name="states"
        />
        <span>{{ state }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Кнопка инициализации
 * Варианты инициализации
 */
import { computed, ref, watch } from "vue";
import { schema } from "../../app";

const states = computed(() => {
  const value = schema.value();
  return Object.keys(value.states);
});

const value = ref();

watch(value, () => {
  console.log(value.value);
});
</script>

<style scoped>
.inited-ui {
  display: flex;
}
.inited-ui__radio input {
  visibility: collapse;
}

.inited-ui__radio span {
  padding: 3px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.inited-ui__radio input:checked + span {
  padding: 3px 10px;
  border-radius: 10px;
  color: #fff;
  background-color: black;
}

.inited-ui__group {
  display: flex;
  flex-wrap: wrap;
}
</style>
