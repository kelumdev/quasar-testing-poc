<template>
  <q-input
    v-model="text"
    label-slot
    stack-label
    placeholder="Placeholder"
    hint="With placeholder"
    class="app-input"
  >
    <template v-slot:label
      ><span class="app-label-slot"
        >Rate Title: <span style="color: red">*</span></span
      ></template
    >
  </q-input>
</template>

<style lang="scss">
.app-input {
  .q-field__native {
    border: 2px solid #eee;
    margin-top: 20px;
    min-height: 40px;
    padding: 0;
    border-radius: 8px;
  }

  .q-field__control:before,
  .q-field__control:after {
    display: none;
  }

  .q-field__label {
    top: 0;
  }

  .q-field__native {
    line-height: normal;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 12px;
  }

  .q-field__label {
    transform: none;
  }
}
</style>

<script setup>
import { ref } from "vue";

const text = ref("");

defineProps({
  name: String,
});

defineOptions({
  name: "AppInput",
});
</script>
