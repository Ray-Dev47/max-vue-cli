<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
// import globally
    import User from './components/User';


// register globally
    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
div.component{
  border: px solid black;
  padding: 30px;
  margin: 30px;
}

</style>
