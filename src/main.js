import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import router from "./router"; // Import the router
import 'bootstrap';



const app = createApp(App);

app.use(router); // Use the router

// Mount the app
app.mount('#app');

