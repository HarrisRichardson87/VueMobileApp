<template>
  <div class="home">
    <img id="main" alt="Vue logo" height="100" src="../assets/logo.png">
    <Search msg="Welcome to Your Vue.js App" v-on:filterToFather="test($event)" />
    <Player v-bind:searchData='search' />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Search from '@/components/Search.vue'
  import Player from '@/components/Player.vue'
  export default {
    name: 'Home',
    components: {
      Search,
      Player
    },
    data: function () {
      return {

        search: ''
      }
    },
    methods: {
      test(datosFiltro) {
        this.search = datosFiltro;
      }
    }

  }
</script>
<style>
  #main {

    padding-bottom: 10px
  }
</style>