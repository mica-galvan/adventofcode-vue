<script setup>
import miInput from '../assets/inputDay01.txt?raw' //importa el archivo el ?raw es para que lo lea como un texto plano sin formato
import { ref, computed } from 'vue'
import useToggleResultadosResolver from '../composables/useTogglePersisted';
import DayBase from '../components/DayBase.vue';

//función flecha
const resolver = () => {
  console.log("Ejecutando por primera vez día 1");
  const elfos = miInput.trim().split('\n\n');//\r\n\r\n (para windows)
  //trim saca espacios delante y detras de cada linea y split divide cuando detecta salto de linea (doble). Divide por bloque de calorias entre lineas en blanco

  let maxCalorias = 0;
  const elfosSumarizados = [];
  for (const elfo of elfos) {
    const calorias = elfo.trim().split('\n');//split devuelve array con las calorías que lleva ese elfo
    let sumaCalorias = 0;
    for (const caloria of calorias) {
      sumaCalorias += parseInt(caloria);
    }

    if (sumaCalorias > maxCalorias) {
      maxCalorias = sumaCalorias;
    }
    elfosSumarizados.push(sumaCalorias);//p2
  }

  // Ordenar y sumarizar para la Parte 2
  elfosSumarizados.sort((a, b) => b - a); //orden descendente
  let sumaTopTres = elfosSumarizados.slice(0, 3).reduce((a, b) => a + b, 0);
  // Asignar resultados
  resultadoParte1.value = maxCalorias;
  resultadoParte2.value = sumaTopTres;
};
const dia = "1";
const tituloDia = "Al dar click en el botón se verán los resultados para el ejercicio del Día 1";
const mensajeParte1 = computed(() => `El elfo que lleva más calorías, lleva un total de ${resultadoParte1.value} calorías`);
const mensajeParte2 = computed(() => `El elfo que lleva más calorías, lleva un total de ${resultadoParte2.value} calorías`);
const { mostrarResultados, resultadoParte1, resultadoParte2, toggleResultadosResolver } = useToggleResultadosResolver(resolver, dia);
</script>

<template>
  <DayBase :dia="dia" :tituloDia="tituloDia" :mensajeParte1="mensajeParte1" :mensajeParte2="mensajeParte2"
    :mostrarResultados="mostrarResultados" :click="toggleResultadosResolver" />
</template>