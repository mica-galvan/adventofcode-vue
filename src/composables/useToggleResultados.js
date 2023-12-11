// src/composables/useToggleResultados.js
import { ref } from 'vue';

export default function useToggleResultados(parte1, parte2, resolver) {
  const mostrarResultados = ref(false);

  const toggleResultados = () => {
    if (!mostrarResultados.value) {
      if (parte1 && parte2) {
        parte1();
        parte2();
      } else if (resolver && typeof resolver === 'function') {
        resolver();
      }
    }
    mostrarResultados.value = !mostrarResultados.value;};
  return {
    mostrarResultados,
    toggleResultados,
  };
}