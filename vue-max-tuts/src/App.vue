<template>
  <div class="container">
      <div class="row">
        <h2>Mixings 1</h2>
        <p>{{ salute }}</p>
        <button v-on:click="fruits.push('cherry')">Add More</button>
        <input type="text" class="form-control" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" v-bind:key="fruit"> {{ fruit }} </li>
        </ul>
        <hr>
        <app-list></app-list>
    </div>   
  </div>
</template>

<script>
//importing the list component
import List from './components/List.vue'

// importing the mixin 
import { fruitMixin } from "./fruitMixin";

export default {
    data(){
        return{
            salute: 'Hi Ray'
        }

    },
    // register the mixin
    mixins: [fruitMixin],

// register component
    components: {
       appList: List
    },
    
    
};
</script>

<style></style>
