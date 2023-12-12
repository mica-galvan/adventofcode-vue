<script setup>
import cadena from '../assets/inputDay06.txt?raw'
import { ref } from 'vue'
import useToggleResultadosPartes from '../composables/useToggleResultadosPartes';
import DayBase from './DayBase.vue';

const resultadoParte1 = ref(0);
const resultadoParte2 = ref(0);

//la función verCaracteres se encarga de actualizar los valores de las variables reactivas resultadoParte1 y resultadoParte2 con los resultados de las funciones parte1 y parte2, respectivamente

const parte1 = () => { //recorre la cadena en bloques de 4 caracteres, verifica si hay duplicados y devuelve el indice donde se encuentra el patron. Si no se encuentra, devuelve 0
  for (let i = 0; i < cadena.length; i++) {//se ejecuta mientras sea menor que la longitud de la cadena
    let miArray = cadena.slice(i, i + 4);//divide la cadena cada 4 caracteres, y se mueve de 4 en 4
    let miSet = new Set(miArray);//verifica si hay caracteres duplicados con set (set solo permite valores unicos)
    if (miArray.length === miSet.size) {//compara longitud del array y del set  Si es igual, no hay duplicados
      return i + 4;//cadena sin duplicados devuelve el (i) indice actual del bucle + 4 para indicar la posicion del patron
    }
  }
  return 0; //si no se encuentra 'patron sin duplicados' retorna 0
  
}
resultadoParte1.value = parte1();

const parte2 = () => {//busca un patron pero en bloques de 14 caracteres
  for (let i = 0; i < cadena.length; i++) {
    let miArray = cadena.slice(i, i + 14);
    let miSet = new Set(miArray);
    if (miArray.length === miSet.size) {
      return i + 14;
    }
  }
  return 0;
}
resultadoParte2.value = parte2();

//pasar la funcion correspondiente como argumento
const { mostrarResultados, toggleResultadosPartes } = useToggleResultadosPartes(parte1, parte2);

</script>

<template>
          <DayBase
      description="Al dar clic en el botón se verán los resultados para el ejercicio del Día 6"
      :mensajeParte1="'Deben procesarse ' + resultadoParte1 + ' caracteres, para detectar paquetes.'"
      :mensajeParte2="'Deben procesarse ' + resultadoParte2 + ' caracteres antes de que se detecte el primer marcador de inicio de mensaje.'"
      :mostrarResultados="mostrarResultados"
      :click="toggleResultadosPartes"
    />

</template>

<style scoped></style>