<template>
    <div class="component">
       <h3>You may View the User Detail Here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName()}}</p>
        <p>User Age: {{ userAge}}</p>
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
        resetFn: Function,
        userAge: Number
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