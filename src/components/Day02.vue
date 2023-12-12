<!--Day02.vue-->
<script setup>
import guiaJuego from '../assets/inputDay02.txt?raw'
import Button from 'primevue/button';
import { ref } from 'vue'
import useToggleResultadosResolver from '../composables/useToggleResultadosResolver';
import DayBase from './DayBase.vue';

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
const { mostrarResultados, toggleResultadosResolver } = useToggleResultadosResolver(resolver);


</script>


<template>
    <DayBase
      description="Al dar clic en el botón se verán los resultados para el ejercicio del Día 2"
      :mensajeParte1="'El total de puntos de todas las manos es: ' + resultadoParte1"
      :mensajeParte2="'El total de puntos de todas las manos es: ' + resultadoParte2"
      :mostrarResultados="mostrarResultados"
      :click="toggleResultadosResolver"
    />
  </template>


<style scoped>
</style>