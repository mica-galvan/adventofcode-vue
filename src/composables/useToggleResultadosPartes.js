//By convention, composable function names start with the “use” keyword.
//useToggleResultadosPartesPartes
import { ref } from 'vue';

export default function useToggleResultadosPartes(parte1, parte2) {
  const mostrarResultados = ref(false);
  let funcionesEjecutadas = false;

  const toggleResultadosPartes = () => {
    if (!funcionesEjecutadas) {
      parte1();
      parte2();
      funcionesEjecutadas = true;
    }

    mostrarResultados.value = !mostrarResultados.value;
  };

  return {
    mostrarResultados,
    toggleResultadosPartes,
  };
}
