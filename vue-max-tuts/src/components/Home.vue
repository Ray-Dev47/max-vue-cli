<template>
<div>
   <ServerStatus v-for="server in 5" v-bind:key="server" ></ServerStatus>
</div>
    
</template>

<script>
// import locally 
import ServerStatus from '../components/ServerStatus'

export default {
// register locally
 components: {
     'ServerStatus': ServerStatus
 }

}
</script>