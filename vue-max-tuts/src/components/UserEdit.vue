<template>
    <div class="component">
         <h3>You may edit the User Here</h3>
        <p>Edit Me!</p>
        <p>User Name: {{name}}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit age</button>
    </div>
</template>

<script>
export default {
    props: ['userAge'],
      props : {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        editAge(){
            this.userAge = 30;
            this.$emit('ageWasEdited', this.userAge)
        }
    }
}
</script>

<style scoped>
  div{
      background-color: lightcoral;
  }
</style>