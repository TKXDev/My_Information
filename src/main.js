import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/styles.css";
// import tualor1 from "./assets/tualor1.JPG";


createApp(App).use(store).use(router).mount('#app')
