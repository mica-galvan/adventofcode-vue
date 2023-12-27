import { ref } from 'vue';
//composable keyword=use
export default function useToggleResultadosPartes(resolver) {//alterna resultados label btn y ejecuta la resol(pasada como argumento)
  const mostrarResultados = ref(false);
  let resolucionEjecutada = false;//rastrear si la resolución ya ha sido ejecutada

  const toggleResultadosResolver = () => {
    if (!resolucionEjecutada && !mostrarResultados.value) {//verifica si la resol no se ejecuto y si los resultados no estan visibles
      resolver();
      resolucionEjecutada = true;//ejecuta la func resolver y marca resolucionEjec como true
    }

    mostrarResultados.value = !mostrarResultados.value;//alterna la visibilidad de los resultados mostrar/ocultar
  };

  return {// retorna ref y toggle para mostar/ocultar resultados y ejecutar la resolución cuando sea necesario
    mostrarResultados, //ref reactiva
    toggleResultadosResolver,
  };
}