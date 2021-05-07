import Vue from 'vue'
import App from './App.vue'

// importing home component globally 
import Home from './components/Home.vue'

// register it globally
Vue.component('Home', Home)


new Vue({
  el: '#app',
  render: h => h(App)
})
