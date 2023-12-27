import { defineStore } from "pinia"; //la func defineStore de la biblioteca Pinia, que se utiliza para crear una instancia de almacen de estado.

export const useEjecucionStore = defineStore("ejecucionStore", {
  state: () => ({
    // define el estado inicial y sus porpiedades
    mostrar: [],
    resultados: [],
  }),
  getters: {
    //toma un índice como parametro y devuelve el valor correspondiente de la propiedad mostrar. Si el valor es undefined, devuelve false.
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
      //se define setmostrar. toma dos parametros y atualiza la prop mostrar, an tes de actualizar verifica si thismostrar(dia) es falso y luiego utiliza patch para actualizar la prop
      if (!this.mostrar[dia]) {
        this.$patch({ mostrar: { ...this.mostrar, [dia]: estadoMostrar } });
      }

      this.$patch({ mostrar: { ...this.mostrar, [dia]: estadoMostrar } });
    },
  },
});
