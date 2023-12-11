<script setup>
import miInput from '../assets/inputDay01.txt?raw' //importa el archivo el ?raw es para que lo lea como un texto plano sin formato
import { ref } from 'vue'
import Button from 'primevue/button';
import useToggleResultados from '../composables/useToggleResultados'


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
const { mostrarResultados, toggleResultados } = useToggleResultados(parte1, parte2);

</script>

<template>
  <div class="p-container pt-6 contenedor">
    <p>Al dar clic en el botón se verán los resultados para el ejercicio del Día 1</p>
    <div class="p-d-flex p-flex-column p-jc-center">
      <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none" @click="toggleResultados">
        {{ mostrarResultados ? 'Ocultar resultados' : 'Mostrar resultados' }}
      </Button>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 1</p>
        <p>El elfo que lleva más calorías, lleva un total de {{ resultadoParte1 }} calorías.</p>
      </div>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 2</p>
        <p>Los 3 elfos que llevan más calorías, llevan un total de {{ resultadoParte2 }} calorías.</p>
      </div>
    </div>
  </div>
  </template>

<style scoped>
</style>