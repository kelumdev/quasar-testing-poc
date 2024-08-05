<template>
  <q-select
    v-model="selected"
    :options="options"
    options-dense
    label="Standard"
    class="app-select"
  >
    <template v-slot:label>
      <span class="app-label-slot"
        >Select <span style="color: red">*</span></span
      >
    </template>
    <slot v-if="!selected"
      ><span class="app-placeholder">Placeholder</span></slot
    >
  </q-select>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("");
const options = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
  {
    label: "Option 3",
    value: "3",
  },
];

defineOptions({
  name: "CustomSelect",
});
</script>

<style lang="scss">
.app-select {
  &.q-field--labeled {
    .q-field__native {
      min-height: 40px;
      border: 2px solid #eee;
      margin-top: 4px;
      border-radius: 8px;
      line-height: normal;
      padding-bottom: 0;
      padding-left: 10px;
    }

    .q-field__control-container {
      margin-top: 0;
    }
  }
  .q-field__label {
    top: 0;
    transform: none;
  }

  .q-field__marginal {
    position: absolute;
    right: 10px;
    top: 30px;
    height: auto;
  }

  .q-field__control:before {
    display: none;
  }

  .app-placeholder {
    display: flex;
    position: absolute;
    top: 32px;
    left: 10px;
    color: #727272;
  }

  .q-field__control {
    height: 60px;

    &:after {
      display: none;
    }
  }
}
.q-field--auto-height.q-field--labeled {
  .q-field__control-container {
    padding-top: 18px;
  }
}
</style>
