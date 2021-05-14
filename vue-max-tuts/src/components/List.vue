<template>
  <div class="container">
    <div class="row">
      <h2>Mixings 2</h2>
      <p>{{ greet }}</p>

      <input type="text" class="form-control" v-model="filterText" />
      <ul>
        <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// importing the mixin 
import { fruitMixin } from "../fruitMixin";

export default {
    data(){
        return {
            greet: 'Hello There '
        }
    },
 // register the mixin
  mixins: [fruitMixin]
}
</script>

<style></style>
