<template>
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-md-8">

        <div v-cloak >
          <div v-show="show" >
            <News height="400" />
          </div>
          <div v-show="!show" >
            <Player v-bind:searchData='search' />
          </div>
        </div>
        </div>
        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- Search Widget -->
          <div class="card">
            <h5 class="card-header">Search our Database</h5>
            <div class="card-body">
              <div class="input-group">
                <Search msg="Welcome to Your Vue.js App" v-on:filterToFather="test($event)" />
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>






</template>

<script>
  // @ is an alias to /src
  import News from '@/components/News.vue'
  import Search from '@/components/Search.vue'
  import Player from '@/components/Player.vue'

  export default {
    name: 'Home',
    components: {
      Search,
      Player,
      News
    },
    data: function () {
      return {
        show: true,
        search: ''
      }
    },
    methods: {
      test(datosFiltro) {
        this.show = false
        this.search = datosFiltro;
      }
    },


  }
</script>
<style>
  #main {

    padding-bottom: 10px
  }
</style>