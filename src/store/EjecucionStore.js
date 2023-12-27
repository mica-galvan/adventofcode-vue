import { defineStore } from "pinia";

export const useEjecucionStore = defineStore("ejecucionStore", {
  state: () => ({
    mostrar: [],
    resultados: [],
  }),
  getters: {
    getDiasByIndex: (state) => (index) => {
      const resultado = state.mostrar[index];
      if (typeof resultado === "undefined") {
        return false;
      } else {
        return resultado;
      }
    },
  },
  actions: {
    setMostrar(dia, estadoMostrar) {
      if (!this.mostrar[dia]) {
        this.$patch({ mostrar: { ...this.mostrar, [dia]: estadoMostrar } });
      }

      this.$patch({ mostrar: { ...this.mostrar, [dia]: estadoMostrar } });
    },
  },
});
