<script setup>
import cadena from '../assets/inputDay06.txt?raw'
import { ref, computed } from 'vue'
import useToggleResultadosResolver from '../composables/useTogglePersisted';
import DayBase from '../components/DayBase.vue';

const resolver = () => {//recorre la cadena en bloques de 4 caracteres, verifica si hay duplicados y devuelve el indice donde se encuentra el patron. Si no se encuentra, devuelve 0
  //Parte1
  console.log("Ejecutando por primera vez día 6");
  for (let i = 0; i < cadena.length; i++) {//se ejecuta mientras sea menor que la longitud de la cadena
    let miArray = cadena.slice(i, i + 4);//divide la cadena cada 4 caracteres, y se mueve de 4 en 4
    let miSet = new Set(miArray);//verifica si hay caracteres duplicados con set (set solo permite valores unicos)
    if (miArray.length === miSet.size) {//compara longitud del array y del set  Si es igual, no hay duplicados
      // Asigna la posición del patrón
      resultadoParte1.value = i + 4;
      break; //retorna i + 4;cadena sin duplicados devuelve el (i) indice actual del bucle + 4 para indicar la posicion del patron
    }
  }
  //Parte 2
  for (let i = 0; i < cadena.length; i++) {
    let miArray = cadena.slice(i, i + 14);//busca un patrón en bloques de 14 caracteres
    let miSet = new Set(miArray);
    // Verifica si hay caracteres duplicados
    if (miArray.length === miSet.size) {
      // Asigna la posición del patrón
      resultadoParte2.value = i + 14;
      break;
    }
  }
};
const dia = "6";
const tituloDia = "Al dar click en el botón se verán los resultados para el ejercicio del Día 5";
const mensajeParte1 = computed(() => `Deben procesarse ${resultadoParte1.value} caracteres para detectar paquetes`);
const mensajeParte2 = computed(() => `Deben procesarse ${resultadoParte2.value} caracteres antes de que se detecte el primer marcador de inicio de mensaje`);
const { mostrarResultados, resultadoParte1, resultadoParte2, toggleResultadosResolver } = useToggleResultadosResolver(resolver, dia);
</script>

<template>
  <DayBase :dia="dia" :tituloDia="tituloDia" :mensajeParte1="mensajeParte1" :mensajeParte2="mensajeParte2"
    :mostrarResultados="mostrarResultados" :click="toggleResultadosResolver" />
</template>