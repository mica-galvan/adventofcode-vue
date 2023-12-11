<script setup>
import guiaJuego from '../assets/inputDay02.txt?raw'
import Button from 'primevue/button';
import { ref } from 'vue'
import useToggleResultados from '../composables/useToggleResultados';

const partida = guiaJuego.trim().split('\n');
const resultadoParte1 = ref(0);
const resultadoParte2 = ref(0);

const resolver = () => {
    resultadoParte1.value = 0;
    resultadoParte2.value = 0;
    for (const mano of partida) {
        if (mano === 'A X') {
            resultadoParte1.value += 4;
            resultadoParte2.value += 3;
        } else if (mano === 'A Y') {
            resultadoParte1.value += 8;
            resultadoParte2.value += 4;
        } else if (mano === 'A Z') {
            resultadoParte1.value += 3;
            resultadoParte2.value += 8;
        } else if (mano === 'B Y') {
            resultadoParte1.value += 1;
            resultadoParte2.value += 1;
        } else if (mano === 'B Y') {
            resultadoParte1.value += 5;
            resultadoParte2.value += 5;
        } else if (mano === 'B Z') {
            resultadoParte1.value += 9;
            resultadoParte2.value += 9;
        } else if (mano === 'C X') {
            resultadoParte1.value += 7;
            resultadoParte2.value += 2;
        } else if (mano === 'C Y') {
            resultadoParte1.value += 2;
            resultadoParte2.value += 6;
        } else if (mano === 'C Z') {
            resultadoParte1.value += 6;
            resultadoParte2.value += 7;
        }
    }

}
//pasar la funcion correspondiente como argumento
const { mostrarResultados, toggleResultados } = useToggleResultados(null, null, resolver);


</script>

<template>
  <div class="p-container pt-6 contenedor">
    <p>Al dar clic en el botón se verán los resultados para el ejercicio del Día 2</p>
    <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none" @click="toggleResultados">
        {{ mostrarResultados ? 'Ocultar resultados' : 'Mostrar resultados' }}
      </Button>
    <div v-if="mostrarResultados" class="p-mt-4 resultados">
      <p>PARTE 1</p>
      <p>El total de puntos de todas las manos es: {{ resultadoParte1 }}</p>
      <p>PARTE 2</p>
      <p>El total de puntos de todas las manos es: {{ resultadoParte2 }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>