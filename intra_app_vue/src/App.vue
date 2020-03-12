<template>
  <v-app>
    <navbar ></navbar>
   
     <main class="py-4">
      <router-view>      <router-link  to="/Graphs" class='logged-in'>Premier League Ratings</router-link>
</router-view>
    </main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Search from './components/Search'
import navbar from "./components/Navbar";
export default {
  name: 'App',

  components: {
    navbar
    // HelloWorld,Search
    // Search
  },

  data: () => ({
    //
  }),
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@100&display=swap');
#app {
   font-family: 'Lobster', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
table{
  font-family: 'Roboto', sans-serif;

}

</style>