<template >
  <div id="home">
    <div class="title-container">
      <h1 class=" festive-title p-text-center pt-6 contenedor text-white text-lg text-bold">✨Advent of Code: Resolución de
        Ejercicios - Evento 2022✨</h1>
    </div>
    <div class="snowfall">
      <transition-group name="snowfall" @before-enter="beforeEnter" @enter="enter">
        <div v-for="flake in flakes" :key="flake.id" class="flake"></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flakes: [],
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.transform = `translate(0, -${window.innerHeight}px) scale(0.8)`;
    },
    enter(el, done) {
      const delay = Math.random() * 1000; // Ajusta el retraso para que inicie más rápido
      setTimeout(() => {
        el.style.transition = `transform 3s linear`;
        el.style.transform = `translate(${Math.random() * window.innerWidth}px, ${window.innerHeight}px) scale(0.8)`;
        done();
      }, delay);
    },
  },
  mounted() {
    setInterval(() => {
      this.flakes.push({ id: Date.now() });
    }, 100); // Ajusta la frecuencia para que los copos caigan más rápido
  },
};
</script>

<style scoped>
.title-container {
  position: relative;
}

.festive-title {

  text-shadow: 2px 2px 4px #013f04;
  /* Sombra de texto para resaltar */

}

.snowfall {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.flake {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
}

#home {
  background-image: url('../assets/bg-home.jpg');
  background-size: cover;
  background-position: center;
}
</style>
