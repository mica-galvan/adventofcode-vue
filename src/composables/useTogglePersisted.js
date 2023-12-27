import { ref, onMounted } from "vue";
//onmounted es un hook de ciclo de vida que se ejecuta desps de que el componente ha sido montado

export default function useToggleResultadosResolver(resolver, dia) {
  //resolver es func y dia es valor
  //variables reactivas, cambiaran cuando se les asigne nuevo valor
  const mostrarResultados = ref(false);
  let funcionEjecutada = ref(false);
  const resultadoParte1 = ref(0);
  const resultadoParte2 = ref(0);
  //carga los resultados desde el sessionStorage y los asigna a las ref
  const cargarResultadosDesdeSessionStorage = () => {
    const resultados =
      JSON.parse(sessionStorage.getItem(`resultados${dia}`)) || {};
    resultadoParte1.value = resultados.resultadoParte1 || 0;
    resultadoParte2.value = resultados.resultadoParte2 || 0;
    funcionEjecutada.value = resultados.funcionEjecutada || false;
  };

  const guardarResultadosEnSessionStorage = () => {
    //guarda los resultados en el sessionStorage como un objeto JSON
    sessionStorage.setItem(
      `resultados${dia}`, //para el dia especifico
      JSON.stringify({
        resultadoParte1: resultadoParte1.value,
        resultadoParte2: resultadoParte2.value,
        funcionEjecutada: funcionEjecutada.value,
      })
    );
  };
  //Si la función no se ha ejecutado,se ejecuta y se marca como ejecutada + se guardan los resultados
  const toggleResultadosResolver = () => {
    if (!funcionEjecutada.value) {
      resolver(); // resolucion dentro del toggle
      funcionEjecutada.value = true;
      guardarResultadosEnSessionStorage();
    }
    //alterna resultados
    mostrarResultados.value = !mostrarResultados.value;
  };

  //carga resultados desde el session storagey ejecuta resolver cuando el componente esta montado
  onMounted(() => {
    cargarResultadosDesdeSessionStorage(); //se ejecuta despies de montar el componente y carga los resultados desde el sessionStorage
  });

  return {
    mostrarResultados,
    resultadoParte1,
    resultadoParte2,
    toggleResultadosResolver,
  };
}
