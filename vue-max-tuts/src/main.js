import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
           this.$emit('ageWasEdited', age)
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


