<script setup>
// Importa el contenido del archivo inputDay05.txt y lo almacena en la variable 'input'.
import input from '../assets/inputDay05.txt?raw'

// Importa la función 'ref' de Vue, que se utiliza para crear variables reactivas.
import { ref } from 'vue'

// Crea dos variables reactivas 'inputParte1' e 'inputParte2' e inicialízalas con el valor 0.
const inputParte1 = ref(0);
const inputParte2 = ref(0);

// Crea una función llamada 'verCajas'.
const verCajas = () => {
    // Inicializa las variables 'inputParte1' e 'inputParte2' con el valor 0.
    inputParte1.value = 0;
    inputParte2.value = 0;

    // Divide el contenido de 'input' en líneas y almacénalas en 'inputLines'.
    let inputLines = input.split("\n");

    // Inicializa arreglos para almacenar información sobre la cantidad de pilas, las pilas en sí y las instrucciones.
    let cantidadPilas = [];
    let pilasInput = [];
    let instrucciones = [];

    // Itera sobre cada línea en 'inputLines'.
    for (let line of inputLines) {
        // Determina si la línea comienza con "[" y la agrega a 'pilasInput'.
        // Si comienza con "1", la agrega a 'cantidadPilas'.
        // Si comienza con "m", la agrega a 'instrucciones'.
        if (line.trim().startsWith("[")) {
            pilasInput.push(line);
        } else if (line.trim().startsWith("1")) {
            cantidadPilas.push(line);
        } else if (line.trim().startsWith("m")) {
            instrucciones.push(line.trim());
        }
    }

    // Procesa la información sobre la cantidad de pilas.
    cantidadPilas = cantidadPilas[0].split(" ");
    let maxPila = 0;
    for (let pila of cantidadPilas) {
        if (!isNaN(parseInt(pila))) {
            if (parseInt(pila) >= maxPila) {
                maxPila = parseInt(pila);
            }
        }
    }

    // Inicializa arreglos para representar las pilas.
    let pilasParseadas1 = [];
    let pilasParseadas2 = [];

    // Llena las pilasParseadas1 y pilasParseadas2 con arreglos vacíos.
    for (let i = 0; i < maxPila; i++) {
        pilasParseadas1.push([]);
        pilasParseadas2.push([]);
    }

    // Invierte el orden de las pilasInput y procesa cada caja.
    pilasInput.reverse();
    for (let caja of pilasInput) {
        let contador = 0;
        for (let i = 0; i < caja.length; i = i + 4) {
            let contenido = caja.substring(i, i + 3);
            if (contenido.startsWith("[")) {
                pilasParseadas1[contador].push(contenido[1]);
                pilasParseadas2[contador].push(contenido[1]);
            }
            contador += 1;
        }
    }

    // Procesa las instrucciones y actualiza pilasPart1 y el resultado para la parte 1.
    let pilasPart1 = pilasParseadas1;
    for (let instruccion of instrucciones) {
        let cantidades = instruccion.match(/\d+/g);
        for (let i = 1; i <= parseInt(cantidades[0]); i++) {
            pilasPart1[parseInt(cantidades[2]) - 1].push(pilasPart1[parseInt(cantidades[1]) - 1].pop());
        }
    }
    let resultado = "";
    for (let pila of pilasPart1) {
        resultado = resultado + pila.pop();
    }
    // Actualiza el valor de 'inputParte1' con el resultado.
    inputParte1.value = resultado;

    // Procesa las instrucciones y actualiza pilasPart2 y el resultado para la parte 2.
    let pilasPart2 = pilasParseadas2;
    for (let instruccion of instrucciones) {
        let cantidadesb = instruccion.match(/\d+/g);
        pilasPart2[parseInt(cantidadesb[2]) - 1].push(...pilasPart2[parseInt(cantidadesb[1]) - 1].splice(-cantidadesb[0]));
    }
    let resultadob = "";
    for (let pila of pilasPart2) {
        resultadob = resultadob + pila.pop();
    }
    // Actualiza el valor de 'inputParte2' con el resultado.
    inputParte2.value = resultadob;
}
</script>
