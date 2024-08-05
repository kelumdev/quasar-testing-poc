<template>
  <q-layout view="lHh Lpr lFf">
    <CounterComp />

    <q-separator />

    <div class="wrapper">
      <div class="q-mb-sm mb-24"><AppInput /></div>
      <div><AppSelect /></div>
    </div>
  </q-layout>
</template>

<script setup>
import CounterComp from "src/components/CounterComp/CounterComp.vue";
import AppInput from "components/AppInput.vue";
import AppSelect from "components/AppSelect.vue";

defineOptions({
  name: "MainLayout",
});
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
}

.mb-24 {
  margin-bottom: 24px;
}

.q-field__label {
  font-size: 14px;
  line-height: 16px;
  color: #44546f;
  font-weight: 500;
}
</style>
