<template>
  <div class="flow-manager">
    <div class="flow-manager__block">
      <button @click="toState">To State</button>
      <span>Actyal State: {{ actyalState }}</span>
      <div class="flow-manager__line"></div>
    </div>
    <div class="flow-manager__block">
      <h1>Router checkout for name</h1>
      <div class="flow-manager__elem" v-for="route in map" :key="route.name">
        <button @click="checkout(route)">
          {{ route.name }}
        </button>
      </div>
      <div class="flow-manager__line"></div>
    </div>
    <div class="flow-manager__block">
      <h1>Actor shekout signals</h1>
      <div
        class="flow-manager__elem"
        v-for="signal in schema.signals"
        :key="signal"
      >
        <button @click="pushSignal(signal)">
          {{ signal }}
        </button>
      </div>
      <div class="flow-manager__line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { flow, getState } from "../../../app";
import { map } from "../../router/map";
import { useRouter } from "vue-router";
import { schema } from "../../../configs";
import { onUpdated, ref } from "vue";
const router = useRouter();
function checkout(route) {
  router.push(route);
}

function toState() {
  router.push({ name: getState() });
}

function pushSignal(signal) {
  flow.send(signal);
  actyalState.value = getState()
}

const actyalState = ref(getState());
onUpdated(() => {
  actyalState.value = getState()
});
</script>

<style scoped>
.flow-manager {
  display: flex;
  padding: 20px;
  flex-direction: column;
  position: absolute;
  height: 100%;
  top: 0;
  left: -220px;
  justify-content: start;
  background-color: #fff;
  transition: all 1s;
  overflow-y: scroll;
}
.flow-manager__block {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.flow-manager:hover {
  left: 0;
}
.flow-manager__elem {
  padding: 5px;
  font-size: 10px;
}
.flow-manager__elem button {
  float: left;
}

.flow-manager__line {
  width: 100%;
  background-color: #000;
  height: 3px;
}

h1,
span {
  color: black;
  font-size: 20px;
}
</style>
