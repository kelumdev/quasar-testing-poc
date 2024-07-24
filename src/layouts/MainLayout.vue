<template>
  <q-layout view="lHh Lpr lFf">
    <CounterComp />
  </q-layout>
</template>

<script setup>
import CounterComp from "src/components/CounterComp/CounterComp.vue";

defineOptions({
  name: "MainLayout",
});
</script>
