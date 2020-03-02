<template>
   <div class="home">
    <img id="main" alt="Vue logo" height="100" src="../assets/logo.png">
    <Search msg="Welcome to Your Vue.js App"
    v-on:filterToFather="test($event)"/>
   <Table v-on:filterToFather="test($event)"
   v-bind:searchData = 'search'
   ></Table>
   </div>
</template>

<script>

import Search from '@/components/Search.vue'
import Table from '@/components/Table.vue'
export default {
  name: 'Home',
  components: {
    Search,Table
  }, 
  methods:{
    test(datosFiltro){
      alert(datosFiltro)
      this.search = datosFiltro;
    }}
  }
</script>
