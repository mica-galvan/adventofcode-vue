//main.js
import './style.css'
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";//tema puede variar
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
///
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';

//instala PrimeVue en la aplicación

const app = createApp(App);
app.use(router);
app.use(PrimeVue, { ripple: true  });

//importacion de directivas y herramientas
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.component('Button', Button);
app.component('Menu', Menu);

//monta la aplicación en el elemento con el id #app
app.mount("#app");
