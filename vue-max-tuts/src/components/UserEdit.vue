<template>
  <div class="component">
    <h3>You may edit the User Here</h3>
    <p>Edit Me!</p>
    <p>User Name: {{ name }}</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
// we import the event bus
import { eventBus } from '../main';

export default {
  data() {
    return {
      age: this.userAge
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    userAge: Number
  },
  methods: {
    editAge() {
      this.age = 30;
    //   this.$emit("ageWasEdited", this.age);
        //  eventBus.$emit('ageWasEdited', this.age)
        eventBus.changeAge(this.age)

    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
