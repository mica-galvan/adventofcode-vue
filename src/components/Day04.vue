<script setup>
import secciones from '../assets/inputDay04.txt?raw'
import { ref } from 'vue'
import useToggleResultadosPartes from '../composables/useToggleResultadosPartes';
import DayBase from './DayBase.vue';

const resultadoParte1 = ref(0); // la función ref crea variables reactivas, inicializadas en 0 (tipo dom para mostrar en el template) almacenarán la cantidad de secciones intersectadas
const resultadoParte2 = ref(0);


const parte1 = () => { // Mira las secciones y cuenta las que se intersectan/solapan completamente. Actualiza resultadoParte1 con el resultado.
const misSecciones = secciones.trim().split("\n");
let seccionesIntersectadas = 0;

for (let par of misSecciones) {
    let par1 = par.trim().split(",")[0]; //saca espacios y divide en la coma para el par 1 (posicion 0) y para el par 2 (posicion 1)
    let par2 = par.trim().split(",")[1];

    let minPar1 = parseInt(par1.trim().split("-")[0]); //el min del primer par es el de la primera posicion, el max del primer par es el de la 2da posicion y asi suc.
    let maxPar1 = parseInt(par1.trim().split("-")[1]);
    let minPar2 = parseInt(par2.trim().split("-")[0]);
    let maxPar2 = parseInt(par2.trim().split("-")[1]);

    if (minPar1 <= minPar2 && maxPar1 >= maxPar2) {
        seccionesIntersectadas += 1;
    } else if (minPar2 <= minPar1 && maxPar2 >= maxPar1) {
        seccionesIntersectadas += 1;
    }
}
resultadoParte1.value=seccionesIntersectadas
};

//PARTE 2
const parte2 = () => {// Mira las secciones y cuenta las que se intersectan/solapan parcialmente.
const misSecciones2 = secciones.trim().split("\n");
let seccionesIntersectadas2 = 0;//Actualiza resultadoParte2 con el resultado.

for (let par of misSecciones2) {
  let par1 = par.trim().split(",")[0]; 
  let par2 = par.trim().split(",")[1];

  let minPar1 = parseInt(par1.trim().split("-")[0]);
  let maxPar1 = parseInt(par1.trim().split("-")[1]);
  let minPar2 = parseInt(par2.trim().split("-")[0]);
  let maxPar2 = parseInt(par2.trim().split("-")[1]);

  //comparo con estas situaciones para determinar si se pisan parcialmente (si entre pares hay coincidencias en algun momento)
  if ( minPar1 === minPar2 || maxPar1 === minPar2 || minPar1 === maxPar2 || maxPar1 === maxPar2) {
    seccionesIntersectadas2 += 1;
  } else if (minPar1 <= minPar2 && maxPar1 >= maxPar2) {
    seccionesIntersectadas2 += 1;
  } else if (minPar1 >= minPar2 && maxPar1 <= maxPar2) {
    seccionesIntersectadas2 += 1;
  } else if (minPar2 >= minPar1 && minPar2 <= maxPar1) {
    seccionesIntersectadas2 += 1;
  } else if (minPar1 >= minPar2 && minPar1 <= maxPar2) {
    seccionesIntersectadas2 += 1;
  }
}
resultadoParte2.value=seccionesIntersectadas2
};
//pasar la funcion correspondiente como argumento
const { mostrarResultados, toggleResultadosPartes } = useToggleResultadosPartes(parte1, parte2);

</script>

<template>
        <DayBase
      description="Al dar clic en el botón se verán los resultados para el ejercicio del Día 4"
      :mensajeParte1="'Se pisan completamente ' + resultadoParte1 + ' secciones'"
      :mensajeParte2="'Se pisan parcial o completamente ' + resultadoParte2 + ' secciones'"
      :mostrarResultados="mostrarResultados"
      :click="toggleResultadosPartes"
    />
  </template>

<style scoped>
</style>