<script setup lang="ts">
// import RouterManager from "./RouterManager.vue";
import TestModule from "./TestModule.vue";
import InitedUI from "./components/InitedUI.vue";
</script>

<template>
  <div class="test-menu">
    <h1 class="test-menu__title">Test Tools</h1>
    <div class="test-menu__items">
      <TestModule :title="'Inited'" :active="true"> <InitedUI /> </TestModule>
    </div>
  </div>
</template>

<style scoped>
.test-menu {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  color: black;
}
.test-menu__title {
  margin-top: 0;
  padding-bottom: 10px;
  text-align: center;
  font-size: 32px;
  border-bottom: 3px solid black;
}
</style>
