import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes'


// use router 
Vue.use(VueRouter)

const router = new VueRouter({
     // routes: Routes ES5
     routes,     // ES6
     mode: 'history',

     //smooth scrolling  method 1
     // scrollBehavior(to, from, savedPosition){
     //      return{ x: 0, y:700 }
     // }

     // method selector method
     scrollBehavior(to, from, savedPosition){
          if(savedPosition){
               return savedPosition;
          }
          if(to.hash) {
               return {selector: to.hash}
          }
          return{ x: 0, y:700 }
     }

})







new Vue({
  el: '#app',
  // router: router, ES5
  router,    // ES6
  render: h => h(App)
})


