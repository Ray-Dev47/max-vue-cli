<template>
    <div class="component">
        <h3>You may View the User Detail Here</h3>
        <p>Many Details</p>
        <p>Name: {{name}}</p>
    </div>
</template>

<script>
export default {
      props : {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
  div{
      background-color: lightcoral;
  }
</style>