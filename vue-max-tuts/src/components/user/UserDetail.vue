<template>
  <div>
    <h3>Some User Details</h3>
    <p>The Loaded ID for this page is: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary"
      >Edit User</router-link
    >
  </div>
</template>

<script>
    export default {
    data() {
        return {
        link: {
            name: "userEdit",
            params: { id: this.$route.params.id },
            query: { locale: "en", q: 100 },
            hash: '#data'
        }
        };
    },
    beforeRouteEnter(to, from, next){
        if(true){     // use false if you want to lock it
            next()
        } else{
            next(false)
        }
      }
    };
</script>
