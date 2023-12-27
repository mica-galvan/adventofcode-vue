<script setup>
import secciones from '../assets/inputDay04.txt?raw'
import { ref, computed } from 'vue'
import useToggleResultadosResolver from '../composables/useTogglePersisted';
import DayBase from '../components/DayBase.vue';

const resolver = () => { // Mira las secciones y cuenta las que se intersectan/solapan completamente. 
  console.log("Ejecutando por primera vez día 4");
  const misSecciones = secciones.trim().split("\n");
  let seccionesIntersectadas = 0;
  let seccionesIntersectadas2 = 0;

  for (let par of misSecciones) {
    let par1 = par.trim().split(",")[0]; //saca espacios y divide en la coma para el par 1 (posicion 0) y para el par 2 (posicion 1)
    let par2 = par.trim().split(",")[1];

    // Verificar si las secciones se intersectan completamente (p1)
    let minPar1 = parseInt(par1.trim().split("-")[0]); //el min del primer par es el de la primera posicion, el max del primer par es el de la 2da posicion y asi suc.
    let maxPar1 = parseInt(par1.trim().split("-")[1]);
    let minPar2 = parseInt(par2.trim().split("-")[0]);
    let maxPar2 = parseInt(par2.trim().split("-")[1]);

    if (minPar1 <= minPar2 && maxPar1 >= maxPar2) {
      seccionesIntersectadas += 1;
    } else if (minPar2 <= minPar1 && maxPar2 >= maxPar1) {
      seccionesIntersectadas += 1;
    }

    // Verificar si las secciones se intersectan parcial o completamente (p2)
    if (minPar1 === minPar2 || maxPar1 === minPar2 || minPar1 === maxPar2 || maxPar1 === maxPar2) {
      seccionesIntersectadas2 += 1;
    }
    else if (minPar1 <= minPar2 && maxPar1 >= maxPar2) {
      seccionesIntersectadas2 += 1;
    } else if (minPar1 >= minPar2 && maxPar1 <= maxPar2) {
      seccionesIntersectadas2 += 1;
    } else if (minPar2 >= minPar1 && minPar2 <= maxPar1) {
      seccionesIntersectadas2 += 1;
    } else if (minPar1 >= minPar2 && minPar1 <= maxPar2) {
      seccionesIntersectadas2 += 1;
    }
  }
  resultadoParte1.value = seccionesIntersectadas
  resultadoParte2.value = seccionesIntersectadas2
};
const dia = "4";
const tituloDia = "Al dar click en el botón se verán los resultados para el ejercicio del Día 4";
const mensajeParte1 = computed(() => `Se pisan completamente ${resultadoParte1.value} secciones`);
const mensajeParte2 = computed(() => `Se pisan parcial o completamente ${resultadoParte2.value} secciones`);
const { mostrarResultados, resultadoParte1, resultadoParte2, toggleResultadosResolver } = useToggleResultadosResolver(resolver, dia);
</script>

<template>
  <DayBase :dia="dia" :tituloDia="tituloDia" :mensajeParte1="mensajeParte1" :mensajeParte2="mensajeParte2"
    :mostrarResultados="mostrarResultados" :click="toggleResultadosResolver" />
</template>