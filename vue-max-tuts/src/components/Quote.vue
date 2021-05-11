<template>
   <div>
       <slot></slot>
       <slot name="title"></slot>
       <slot name="text"></slot>
       <h4>Just a Random Quote in between the slots</h4>
       <slot name="header"></slot>
   </div>
</template>

<script>
export default {
   

}
</script>

<style scoped>
   div{
       border: 1px solid #ccc;
       box-shadow: 1px 1px 2px black;
       padding: 30px;
       margin: 30px auto;
       text-align: center;
   }
   p,h1,h2,h3,h4{
       color: red;
   }

</style>