<template>
    <div id="component ">
        <h1>The User Component</h1>
        <p>I am an Awesome User!</p>
        <button v-on:click="changeName" class="btn btn-primary btn:hover">Change my name</button>
        <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
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