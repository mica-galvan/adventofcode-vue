<script setup>
import input from '../assets/inputDay05b.txt?raw'
import { ref, computed } from 'vue'
import useToggleResultadosResolver from '../composables/useTogglePersisted';
import DayBase from '../components/DayBase.vue';

const resolver = () => { //resolver llama a las funciones (ejecuta ambas cuando se hace click en el botón en iu)
  console.log("Ejecutando por primera vez día 5");
  resultadoParte1.value = 0;
  resultadoParte2.value = 0;
  //divide el contenido de 'input' en líneas y las almacena en 'inputLines'.
  let inputLines = input.split("\n");
  let cantidadPilas = [];
  let pilasInput = [];
  let instrucciones = [];

  //recorre cada linea de inputlines
  for (let line of inputLines) {
    //depende del comienzo, los agrega al array corespondiente
    if (line.trim().startsWith("[")) {
      pilasInput.push(line);
    } else if (line.trim().startsWith("1")) {
      cantidadPilas.push(line);
    } else if (line.trim().startsWith("m")) {
      instrucciones.push(line.trim());
    }
  };

  //busca la primera entrada (indice/0) y la divide con el espacio
  cantidadPilas = cantidadPilas[0].split(" ");
  let maxPila = 0;
  for (let pila of cantidadPilas) { //recorre el array
    if (!isNaN(parseInt(pila))) {//verifica si es un numero para continuar
      if (parseInt(pila) >= maxPila) {//verifica si lo obtenido cumple la condicion, si es asi se actualiza con el nuevo valor
        maxPila = parseInt(pila);
      }
    }
  }
  //se inician dos arrays vacios que se utilizarán para representar las pilas en el proceso
  let pilasParseadas1 = [];
  let pilasParseadas2 = [];

  //se llena cada array con subarrays vacíos hasta alcanzar el número max de pilas definido por 'maxPila'
  for (let i = 0; i < maxPila; i++) {
    pilasParseadas1.push([]); // Cada elemento de 'pilasParseadas1' representa una pila de cajas inicializada como un array vacío
    pilasParseadas2.push([]); // idem anterior
  };

  //invierte el orden antes de procesarlas.
  pilasInput.reverse();

  for (let caja of pilasInput) {
    let contador = 0;//inicia otro contador
    //for que arranca en 0 y va a ir hasta caja.lenght (largo total de la linea, largo fijo para todas las lineas)
    for (let i = 0; i < caja.length; i = i + 4) {//cada 4 caracteres hay una caja  o 3 espacios vacios en la linea hasta llegar al length
      let contenido = caja.substring(i, i + 3);//una caja o 3 espacios vacios
      //si el contenido comienza con "[", hay una caja, que se inserta en las pilas (ambas)
      if (contenido.startsWith("[")) {
        pilasParseadas1[contador].push(contenido[1]); //agrega el 2do elem al final de la pila en 'pilasParseadas1'(letra)
        pilasParseadas2[contador].push(contenido[1]); //agrega el 2do elem al final de la pila en 'pilasParseadas2'
      }
      contador += 1;
    }
  }

  let pilasPart1 = pilasParseadas1;
  for (let instruccion of instrucciones) { //recorre las instrucciones
    let cantidades = instruccion.match(/\d+/g); //regular expression (regex) para obtener los numeros de una cadena de texto. Contendrá un array con las coincidencias encontradas(match) en la cadena. Cada elemento del array es una secuencia de uno o más dígitos(d+) en una busqueda global (/g).
    for (let i = 1; i <= parseInt(cantidades[0]); i++) { //cantidad de cajas que va a mover. El bucle for itera desde 1 hasta la cantidad de cajas que se va a mover, según el valor almacenado en cantidades[0]
      pilasPart1[parseInt(cantidades[2]) - 1].push(pilasPart1[parseInt(cantidades[1]) - 1].pop());
    } //se ajusta indices del array. Y mueve la cantidad de cajas (pop extrae y devuelve el ult elem del origen) del final de la pila origen al final de la pila destino (push). Las mueve una por una desde cada pila hasta la otra.
  }
  let resultado = "";
  for (let pila of pilasPart1) {
    resultado = resultado + pila.pop();//extrae la última caja de cada pila y concatena en un string el resultado final.
  }
  resultadoParte1.value = resultado;//guarda el resultado

  //PARTE 2
  let pilasPart2 = pilasParseadas2;
  //en lugar de mover cajas una a una como antes, va a mover bloques enteros.
  for (let instruccion of instrucciones) {
    let cantidadesb = instruccion.match(/\d+/g);//regex: Obtiene el número de cajas a mover y las pilas origen y destino -> \d+ obtiene secuencias de uno o mas digitos (en un texto) y con match busca coincidencias. Busca de manera global (/g) Devuelve string-.
    pilasPart2[parseInt(cantidadesb[2]) - 1].push(...pilasPart2[parseInt(cantidadesb[1]) - 1].splice(-cantidadesb[0]));//1)Parsea a entero. Calcula los indices y los ajusta [posiciones].
    //2)...spread operator->copia la parte del array iterado en otro array.
    //3)Con push() agrega los elementos extraidos de la pila (en bloque) a la pila destino. Esto mueve el bloque completo una sola vez sin desordenarlas y repite.
    //4) splice(-) extrae elementos de un indice, como es negativo se cuenta y extrae a partir del final del array (fila)
  }
  let resultadob = ""; //se concatenan las últimas cajas de cada pila en un resultado.
  for (let pila of pilasPart2) {
    resultadob = resultadob + pila.pop();
  }
  resultadoParte2.value = resultadob;
};
const dia = "5";
const tituloDia = "Al dar click en el botón se verán los resultados para el ejercicio del Día 5";
const mensajeParte1 = computed(() => `Después de ordenar, quedan las cajas ${resultadoParte1.value} encima de las pilas`);
const mensajeParte2 = computed(() => `Luego de ordenar nuevamente, quedan las cajas ${resultadoParte2.value} encima de las pilas`);
const { mostrarResultados, resultadoParte1, resultadoParte2, toggleResultadosResolver } = useToggleResultadosResolver(resolver, dia);
</script>

<template>
  <DayBase :dia="dia" :tituloDia="tituloDia" :mensajeParte1="mensajeParte1" :mensajeParte2="mensajeParte2"
    :mostrarResultados="mostrarResultados" :click="toggleResultadosResolver" />
</template>