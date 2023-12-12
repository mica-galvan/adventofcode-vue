<!--Day01.vue-->
<script setup>
import miInput from '../assets/inputDay01.txt?raw' //importa el archivo el ?raw es para que lo lea como un texto plano sin formato
import { ref } from 'vue'
import useToggleResultadosPartes from '../composables/useToggleResultadosPartes';
import DayBase from './DayBase.vue';


const resultadoParte1 = ref(0);
const resultadoParte2 = ref(0);
//const mostrarResultados = ref(false);

//función flecha
const parte1 = () => {
  const elfos = miInput.trim().split('\n\n');
  //trim saca espacios delante y detras de cada linea y split divide cuando detecta salto de linea (doble). Divide por bloque de calorias entre lineas en blanco

  let maxCalorias = 0;
  for (const elfo of elfos) {
    const calorias = elfo.trim().split('\n'); //split devuelve array con las calorías que lleva ese elfo
    let sumaCalorias = 0;

    for (const caloria of calorias) {
      sumaCalorias += parseInt(caloria);
    }

    if (sumaCalorias > maxCalorias) {
      maxCalorias = sumaCalorias;
    }
  }

  resultadoParte1.value = maxCalorias;
};

const parte2 = () => {
  const elfos = miInput.trim().split('\n\n'); //trim saca espacios delante y detras de cada linea y split divide cuando detecta salto de linea (doble).

  const elfosSumarizados = [];

  let maxCalorias = 0;

  for (const elfo of elfos) {
    const calorias = elfo.trim().split('\n');
    let sumaCalorias = 0;

    for (const caloria of calorias) {
      sumaCalorias += parseInt(caloria);
    }
    elfosSumarizados.push(sumaCalorias);
  }

  elfosSumarizados.sort();
  elfosSumarizados.reverse();

  let sumaTopTres = elfosSumarizados[0] + elfosSumarizados[1] + elfosSumarizados[2]
  resultadoParte2.value = sumaTopTres;
};
//pasar la funcion correspondiente como argumento
const { mostrarResultados, toggleResultadosPartes } = useToggleResultadosPartes(parte1, parte2);

</script>

<template>
      <DayBase
      description="Al dar clic en el botón se verán los resultados para el ejercicio del Día 1"
      :mensajeParte1="'El elfo que lleva más calorías, lleva un total de ' + resultadoParte1 + ' calorías'"
      :mensajeParte2="'El elfo que lleva más calorías, lleva un total de ' + resultadoParte2 + ' calorías'"
      :mostrarResultados="mostrarResultados"
      :click="toggleResultadosPartes"
    />
</template>

<style scoped></style>