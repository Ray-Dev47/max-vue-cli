<template>
<div>
    <h1>The User Page</h1>
    <hr>
        <button class="btn btn-primary" @click="NavigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
</div>
</template>


<script>
export default {
    // data() {
    //     return{
    //         id: this.$route.params.id
    //     }
    // },

    // watch: {
    //     '$route'(to, from){
    //         this.id = to.params.id
    //     }

    // },
    methods: {
        NavigateToHome: function () {
            this.$router.push({name: 'home'})
        }
    }
}
</script>