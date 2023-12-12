<!-- App.vue -->
<script setup>
//setup => (aparentemente) importa y exporta automaticamente.
import NavMenu from './components/NavMenu.vue';
import PrimeVue from 'primevue/config';
</script>

<template>
 <NavMenu/>
<router-view /> 

</template>

<style scoped>
</style>
