<!--NavMenu.vue-->
<script setup>
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Menu from 'primevue/menu';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const visible = ref(false);

const Home = { template: '<div>Home Component</div>' };
const Day01 = { template: '<div>Day 01 Component</div>' };
const Day02 = { template: '<div>Day 02 Component</div>' };
const Day03 = { template: '<div>Day 03 Component</div>' };
const Day04 = { template: '<div>Day 04 Component</div>' };
const Day05 = { template: '<div>Day 05 Component</div>' };
const Day06 = { template: '<div>Day 06 Component</div>' };

const days = [
  { label: 'Inicio', route: '/' },
  { label: 'Día 1', route: '/day1', component: Day01 },
  { label: 'Día 2', route: '/day2', component: Day02 },
  { label: 'Día 3', route: '/day3', component: Day03 },
  { label: 'Día 4', route: '/day4', component: Day04 },
  { label: 'Día 5', route: '/day5', component: Day05 },
  { label: 'Día 6', route: '/day6', component: Day06 },
];

const route = useRoute();

const toggleVisibility = () => {
  visible.value = !visible.value;
};
</script>

<template>
  <div>
    <div :class="{'menu-visible': visible}" class="menu">
      <Menu class="bg-black-alpha-90 border-none" :model="days">
        <template #item="{ item, index }">
          <router-link class="text-white-alpha-90 font-bold text-lg p-2 no-underline hover:text-black-alpha-90 " v-if="item.route" :to="item.route">
            {{ item.label }}
          </router-link>
          <a class="" v-else :href="item.url" :target="item.target">
            {{ item.label }}
          </a>
        </template>
      </Menu>
    </div>

    <div :style="{ marginLeft: visible.value ? '250px' : '0' }">
      <div class="toggle-button" @click="toggleVisibility">
        <i v-if="visible" class="pi pi-times p-button p-button-link bg-black-alpha-90 text-white-alpha-90 p-mr-2"></i>
        <i v-else class="pi pi-bars p-button p-button-link bg-black-alpha-90 text-white-alpha-90 p-mr-2"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250px;
  background-color: black;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  z-index: 1000;
}

.menu-visible {
  left: 0;
}

.toggle-button {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 1100;
}

.router-view {
  transition: margin-left 0.5s;
}
</style>
