<template>
  <h3 data-testid="result">Count: {{ count }}</h3>

  <div class="q-pa-md q-gutter-sm">
    <q-btn data-testid="decrement" label="- Decrement" @click="handleDecrement" />
    <q-btn data-testid="increment" color="secondary" label="+ Increment" @click="handleIncrement" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(2);

function handleIncrement(): void {
  count.value++;
}

function handleDecrement(): void {
  count.value--;
}
</script>
