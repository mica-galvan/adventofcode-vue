<script setup>
import rucksacks from '../assets/inputDay03.txt?raw'
import { ref } from 'vue'
import Button from 'primevue/button';
import useToggleResultados from '../composables/useToggleResultados';

const resultadoParte1 = ref(0);
const resultadoParte2 = ref(0);

// PARTE 1
const parte1 = () => {
  const mochilas = rucksacks.trim().split('\n');
  let repetidos = [];
  for (const mochila of mochilas) {
    var mitad = Math.floor(mochila.length / 2);
    var primerCompartimento = mochila.slice(0, mitad);
    var segundoCompartimento = mochila.slice(mitad, mochila.length);

    for (const item of primerCompartimento) {
      if (segundoCompartimento.includes(item)) {
        repetidos.push(item);
        break;
      }
    }
  }

  let sumaresultadoParte1 = 0;
  for (const item of repetidos) {
    sumaresultadoParte1 = sumaresultadoParte1 + obtenerPrioridad(item);
  }
  resultadoParte1.value = sumaresultadoParte1;

//Googlee como mapear una letra a un valor numérico y encontré esta función:
  function obtenerPrioridad(letra) {
    var resultadoParte1 = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
      l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
      u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
      A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37,
      L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46,
      U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
    }
    return resultadoParte1[letra];
  }
};

// PARTE 2
const parte2 = () => {
  const mochilas2 = rucksacks.trim().split('\n');
  let repetidos2 = [];
  for (let i = 0; i < mochilas2.length; i += 3) {
    let grupo = mochilas2.slice(i, i + 3);
    for (let item of grupo[0]) {
      if (grupo[1].includes(item) && grupo[2].includes(item)) {
        repetidos2.push(item);
        break;
      }
    }
  }

  let sumaresultadoParte2 = 0;
  for (const item of repetidos2) {
    sumaresultadoParte2 = sumaresultadoParte2 + obtenerPrioridad2(item);
  }
  resultadoParte2.value = sumaresultadoParte2;

  function obtenerPrioridad2(letra2) {
    var resultadoParte2 = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
      l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
      u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
      A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37,
      L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46,
      U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
    }
    return resultadoParte2[letra2];
  }
};
//pasar la funcion correspondiente como argumento
const { mostrarResultados, toggleResultados } = useToggleResultados(parte1,parte2);
</script>

<template>
 <div class="p-container pt-6 contenedor">
    <p>Al dar clic en el botón se verán los resultados para el ejercicio del Día 3</p>
    <div class="p-d-flex p-flex-column p-jc-center">
      <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none" @click="toggleResultados">
        {{ mostrarResultados ? 'Ocultar resultados' : 'Mostrar resultados' }}
      </Button>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 1</p>
        <p>La suma de las prioridades repetidas en las mochilas es: {{ resultadoParte1 }}</p>
      </div>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 2</p>
        <p>La suma de las prioridades repetidas en las mochilas es: {{ resultadoParte2 }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>