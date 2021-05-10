<template>
    <div id="component ">
        <h1>The User Component</h1>
        <p>I am an Awesome User!</p>
        <button v-on:click="changeName" class="btn btn-primary btn:hover">Change my name</button>
        <p>Name is : {{name}}</p>
        <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- props call -->
                <app-user-detail v-bind:name="name" v-on:nameWasReset="name = $event" :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                 <!-- props call -->
                <app-user-edit  v-bind:name="name"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
 import UserDetail from './UserDetail.vue'
 import UserEdit from './UserEdit.vue'


export default {
    data: function(){
        return {
            name: 'Raymond'
        }
    },
    methods: {
        changeName(){
            this.name = 'Lincoln'
        },
        resetName(){
            this.name = 'Raymond'
        }

    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
}
</script>

<style scoped>
div{
    background-color: lightblue;
}
</style>