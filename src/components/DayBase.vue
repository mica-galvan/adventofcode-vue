<script>
import { ref } from 'vue';
import Button from 'primevue/button';

export default {
  props: {
    description: String,
    mostrarResultados: Boolean,
    mensajeParte1: String,
    mensajeParte2: String,
    click: Function,
  },
  methods: {
    clickHandler() {
      this.click();
    },
  },
};
</script>
<template>
    <div class="p-container pt-6 contenedor">
      <p>{{ description }}</p>
      <div class="p-d-flex p-flex-column p-jc-center">
        <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none" @click="clickHandler">
          {{ mostrarResultados ? 'Ocultar resultados' : 'Mostrar resultados' }}
        </Button>
        <div v-if="mostrarResultados" class="p-mt-4 resultados">
          <p>Parte 1</p>
          <p>{{ mensajeParte1 }}</p>
        </div>
        <div v-if="mostrarResultados" class="p-mt-4 resultados">
          <p>Parte 2</p>
          <p>{{ mensajeParte2 }}</p>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  </style>
