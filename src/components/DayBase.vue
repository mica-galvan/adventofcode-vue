<!-- se pasan las props de los dias (views) dinámicamente, aquí hay un solo template que se reutiliza, los days no tienen estilos ni template -->
<script>
import { useEjecucionStore } from "../store/EjecucionStore.js"
import { mapState, mapActions, storeToRefs } from "pinia"
import Button from 'primevue/button';

export default {
  props: {//como un objeto -recibe props
    dia: String,
    tituloDia: String,
    mostrarResultados: Boolean,
    mensajeParte1: String,
    mensajeParte2: String,
    click: Function,
  },
  methods: {//gestionar el estado global relacionado con la ejecucion
    ...mapActions((dia) => useEjecucionStore(dia), ['setMostrar', 'getDiasByIndex'])
  }
};
</script>

<template>
  <div class="p-container pt-6 contenedor">
    <h1 class="text-base font-normal">{{ tituloDia }}</h1>
    <div class="p-d-flex p-flex-column p-jc-center">
      <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none"
        @click="() => { click(); setMostrar(dia, !getDiasByIndex(dia)) }">
        {{ getDiasByIndex(dia) ? 'Ocultar resultados' : 'Mostrar resultados' }}
      </Button>
      <div v-if="getDiasByIndex(dia)" class="p-mt-4 resultados">
        <p>Parte 1</p>
        <p>{{ mensajeParte1 }}</p>
      </div>
      <div v-if="getDiasByIndex(dia)" class="p-mt-4 resultados">
        <p>Parte 2</p>
        <p>{{ mensajeParte2 }}</p>
      </div>
    </div>
  </div>
</template>