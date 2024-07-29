import { createApp } from 'vue'
import App from './components/HelloWorld.vue'
import './util/addEle'
console.log(import.meta.env.VITE_NAME)
createApp(App).mount('#app')
