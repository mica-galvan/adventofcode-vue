//useToggleResultadosResolver
import { ref } from 'vue';

export default function useToggleResultadosPartes(resolver) {
  const mostrarResultados = ref(false);
  let resolucionEjecutada = false;

  const toggleResultadosResolver = () => {
    if (!resolucionEjecutada && !mostrarResultados.value) {
      resolver();
      resolucionEjecutada = true;
    }

    mostrarResultados.value = !mostrarResultados.value;
  };

  return {
    mostrarResultados,
    toggleResultadosResolver,
  };
}
