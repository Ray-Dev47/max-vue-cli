import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'

// use vue resourse 
Vue.use(VueResource)

// configuring vue resource globally
Vue.http.options.root = 'https://max-http-request-default-rtdb.firebaseio.com./data.json'

// intercepting requests 
Vue.http.interceptors.push((request, next) => {
     console.log(request);
     if(request.method == 'POST'){
      request.method == 'PUT'
     }
     next(response => {
          response.join = () => { return {messages: response.body}}
     });
})

new Vue({
  el: '#app',
  render: h => h(App)
})


