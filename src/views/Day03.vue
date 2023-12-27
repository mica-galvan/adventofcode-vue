<script setup>
import rucksacks from '../assets/inputDay03.txt?raw'
import { ref, computed } from 'vue'
import useToggleResultadosResolver from '../composables/useTogglePersisted';
import DayBase from '../components/DayBase.vue';

const resolver = () => {
  console.log("Ejecutando por primera vez día 3");
  const mochilas = rucksacks.trim().split('\n');
  //PARTE1
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
  //PARTE 2
  let repetidos2 = [];
  for (let i = 0; i < mochilas.length; i += 3) {
    let grupo = mochilas.slice(i, i + 3);
    for (let item of grupo[0]) {
      if (grupo[1].includes(item) && grupo[2].includes(item)) {
        repetidos2.push(item);
        break;
      }
    }
  }

  let sumaresultadoParte2 = 0;
  for (const item of repetidos2) {
    sumaresultadoParte2 = sumaresultadoParte2 + obtenerPrioridad(item);
  }
  resultadoParte2.value = sumaresultadoParte2;

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
const dia = "3";
const tituloDia = "Al dar click en el botón se verán los resultados para el ejercicio del Día 3";
const mensajeParte1 = computed(() => `La suma de las prioridades repetidas en las mochilas es: ${resultadoParte1.value}`);
const mensajeParte2 = computed(() => `La suma de las prioridades repetidas en las mochilas es: ${resultadoParte2.value}`);
const { mostrarResultados, resultadoParte1, resultadoParte2, toggleResultadosResolver } = useToggleResultadosResolver(resolver, dia);
</script>

<template>
  <DayBase :dia="dia" :tituloDia="tituloDia" :mensajeParte1="mensajeParte1" :mensajeParte2="mensajeParte2"
    :mostrarResultados="mostrarResultados" :click="toggleResultadosResolver" />
</template>