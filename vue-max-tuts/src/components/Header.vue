<template>
    <ul class="nav nav-pills">
  <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
  <router-link to="/user/" tag="li" active-class="active"><a>User</a></router-link>
  
</ul>
</template>


<style>
ul li{
    margin-right: 30px;
    text-decoration: none;
}
/* to style active class */ 
.active{
    background-color: #eee;
    color: #444;
}
</style>