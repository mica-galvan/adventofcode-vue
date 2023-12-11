<script setup>
import movimientos from '../assets/inputDay05.txt?raw'
import { ref } from 'vue'
//variables reactivas, guardan los resultados, actualizan el template automaticamente
const movimientosParte1 = ref(0);
const movimientosParte2 = ref(0);

const verCajas = () => { //verCajas llama a las funciones (ejecuta ambas cuando se hace click en el botón en iu)
  parte1();
  parte2();
}
//PARTE 1
//arrays que representan cada pila inicial con sus cajas. En este caso la ultima letra representa la caja de la punta más arriba.
let pila1 = ["D", "L", "J", "R", "V", "G", "F"];
let pila2 = ["T", "P", "M", "B", "V", "H", "J", "S"];
let pila3 = ["V", "H", "M", "F", "D", "G", "P", "C"];
let pila4 = ["M", "D", "P", "N", "G", "Q"];
let pila5 = ["J", "L", "H", "N", "F"];
let pila6 = ["N", "F", "V", "Q", "D", "G", "T", "Z"];
let pila7 = ["F", "D", "B", "L"];
let pila8 = ["M", "J", "B", "S", "V", "D", "N"];
let pila9 = ["G", "L", "D"];

//pilas almacena todas las pila(s).
let pilas = [pila1, pila2, pila3, pila4, pila5, pila6, pila7, pila8, pila9];

const parte1 = () => {
  let instrucciones = movimientos.trim().split("\n");//Lee el archivo "movimientos" línea por línea y obtiene los números de cada instrucción usando regex más abajo↓↓↓
  for (let instruccion of instrucciones) { //recorre las instrucciones
    let cantidades = instruccion.match(/\d+/g); //regular expression (regex) para obtener los numeros de una cadena de texto. Contendrá un array con las coincidencias encontradas(match) en la cadena. Cada elemento del array es una secuencia de uno o más dígitos(d+) en una busqueda global (/g).
    for (let i = 1; i <= parseInt(cantidades[0]); i++) { //cantidad de cajas que va a mover
      pilas[parseInt(cantidades[2]) - 1].push(pilas[parseInt(cantidades[1]) - 1].pop());
    } //bucle para mover la cantidad de cajas (pop) del final de la pila origen al final de la pila destino (push). Las mueve una por una desde cada pila hasta la otra.
  }
  let resultado = "";
  for (let pila of pilas) {
    resultado = resultado + pila.pop();//extrae la última caja de cada pila y concatena en un string el resultado final.
  }
  movimientosParte1.value = resultado;//guarda el resultado
};

//PARTE 2
let pila1b = ["D", "L", "J", "R", "V", "G", "F"];
let pila2b = ["T", "P", "M", "B", "V", "H", "J", "S"];
let pila3b = ["V", "H", "M", "F", "D", "G", "P", "C"];
let pila4b = ["M", "D", "P", "N", "G", "Q"];
let pila5b = ["J", "L", "H", "N", "F"];
let pila6b = ["N", "F", "V", "Q", "D", "G", "T", "Z"];
let pila7b = ["F", "D", "B", "L"];
let pila8b = ["M", "J", "B", "S", "V", "D", "N"];
let pila9b = ["G", "L", "D"];

let pilasb = [pila1b, pila2b, pila3b, pila4b, pila5b, pila6b, pila7b, pila8b, pila9b];

const parte2 = () => {
  let instruccionesb = movimientos.trim().split("\n");

  for (let instruccionb of instruccionesb) {//en lugar de mover cajas una a una como antes, va a mover bloques enteros.
    let cantidadesb = instruccionb.match(/\d+/g);//regex: Obtiene el número de cajas a mover y las pilas origen y destino. \d+ obtiene secuencias de uno o mas digitos y que con match busca coincidencias en una busqueda global (/g) Devuelve string-
    pilasb[parseInt(cantidadesb[2]) - 1].push(...pilasb[parseInt(cantidadesb[1]) - 1].splice(-cantidadesb[0]));//1)Calcula los indices y los ajusta.
    //2)...spread operator copia rápidamente la parte del array iterado en otro array.
    // 3)Con push() agrega los elementos extraidos de la pila (en bloque) a la pila destino. Esto mueve el bloque completo una sola vez sin desordenarlas y repite.
    //4) splice extrae elementos de la pila
  }
  let resultadob = ""; //Se concatenan las últimas cajas de cada pila en un resultado.
  for (let pila of pilasb) {
    resultadob = resultadob + pila.pop();
  }
  movimientosParte2.value = resultadob
};
</script>

<template>
  <div class="contenedor">
    <p>Al dar click en el botón se verán los resultados para el ejercicio del Día 5</p>
    <div>
      <button class="boton" type="button" @click="verCajas">Mostrar resultados
      </button>
      <div v-if="movimientosParte1 != 0">
        <p>PARTE 1</p>
        <p>Después de ordenar, quedan las cajas {{ movimientosParte1 }} encima de las pilas.</p>
      </div>
      <div v-if="movimientosParte2 != 0">
        <p>PARTE 2</p>
        <p>Luego de ordenar nuevamente, quedan las cajas {{ movimientosParte2 }} encima de las pilas.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  margin: 20px;
}
.boton {
  background-color: #4caf50;
  color: white;
  margin: 20px;
  border-radius: 5%;
  cursor: pointer;
}
.boton:hover {
  background-color: rgb(22, 116, 3);
}
.resultados {
  margin-top: 20px;
}</style>