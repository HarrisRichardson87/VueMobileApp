<template>
  <div class="home">
   

    <img id="main" alt="Vue logo" height="100" src="../assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"
    v-on:filterToFather="test($event)"/>
    <Player v-bind:searchData = 'search'/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Player from '@/components/Player.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,Player
  },
  data: function () {
      return {
       
          search:''
      }
  },
   methods:{
    test(datosFiltro){
      this.search = datosFiltro;
    }}

}
</script>
<style >
#main{

  padding-bottom: 10px

}
</style>