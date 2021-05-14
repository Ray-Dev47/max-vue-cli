<template>
  <div class="container">
      <div class="row">
        <h2>Filters and Mixings</h2>
        <p>{{ greeting | to-uppercase }}</p>
        <hr>
        <p>{{ greeting2 | customUppercase | to-lowercase }}</p>
        <input type="text" class="form-control" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" v-bind:key="fruit"> {{ fruit }} </li>
        </ul>
    </div>   
  </div>
</template>

<script>
export default {
    data: function () {
        return{
            greeting: 'Hello Raymond, Welcome to Nigeria  ....this paragraph was transformed to uppercase using filters globally',
            greeting2: 'Hello Raymond, Welcome to Nigeria  ....this paragraph was transformed to uppercase using filters locally',
            fruits: ['mango','papaya', 'orange', 'grape', 'apple', 'banana', 'cocoa'],
            filterText: ''
        }
    },
    // registering filters locally
    filters: {
        customUppercase(value){
            return value.toUpperCase()
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((el) => {
                return el.match(this.filterText)
            })
        }
    }
};
</script>

<style></style>
