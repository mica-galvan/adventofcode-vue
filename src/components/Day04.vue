<script setup>
import secciones from '../assets/inputDay04.txt?raw'
import { ref } from 'vue'
import Button from 'primevue/button';
import useToggleResultados from '../composables/useToggleResultados';

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
const { mostrarResultados, toggleResultados } = useToggleResultados(parte1, parte2);

</script>

<template>
  <div class="p-container pt-6 contenedor">
    <p>Al dar clic en el botón se verán los resultados para el ejercicio del Día 4</p>
    <div class="p-d-flex p-flex-column p-jc-center">
      <Button class="p-mb-4 boton bg-green-400 hover:bg-green-900 border-none" @click="toggleResultados">
        {{ mostrarResultados ? 'Ocultar resultados' : 'Mostrar resultados' }}
      </Button>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 1</p>
        <p>Se pisan completamente {{ resultadoParte1 }} secciones</p>
      </div>
      <div v-if="mostrarResultados" class="p-mt-4 resultados">
        <p>PARTE 2</p>
        <p>Se pisan parcial o completamente {{ resultadoParte2 }} secciones</p>
      </div>
    </div>
  </div>
  </template>

<style scoped>
</style>