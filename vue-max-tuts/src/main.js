import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// registering filters globally
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase()
})

Vue.filter('to-lowercase', function(value){
    return value.toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
})


