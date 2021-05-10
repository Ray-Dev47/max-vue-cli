<template>
    <div class="component">
        <h3>You may edit the User Here</h3>
        <p>Edit Me!</p>
        <p>Name: {{ switchName()}}</p>
        <!-- props -->
        <button v-on:click="resetName()">Reset Name using props</button>
        <!-- callback -->
        <button v-on:click="resetFn()">Reset Name using callback</button>
    </div>
</template>

<script>
export default {
    // props: ['name'],
    props : {
        name: {
            type: String,
            required: true
            // default: 'Uju'
        },
        // callback function as an alternative to props 
        resetFn: Function
    },
    methods: {
        switchName(){
            return this.name.split('').reverse().join('');
        },
        resetName() {
            this.name = 'Raymond';
            this.$emit('nameWasReset', this.name)
        }
    }
}
</script>

<style scoped>
  div{
      background-color:  lightgreen;
  }
</style>