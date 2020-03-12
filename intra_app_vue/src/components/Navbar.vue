<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel navbar navbar-white bg-white justify-content-between shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand"><img height="30" width="30" src="../assets/logo.png">
      intr()cular</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
            <li>
                <router-link  to="/Graphs" class='nav-link'>Ratings</router-link>
            </li>   
             <li>
                <router-link  to="/how" class='nav-link'>How it Works</router-link>
            </li>   
          <template v-if="user.loggedIn">
            <li>
                <router-link  :to="{name:'chat', params: {userName:user.data.displayName}}" class='nav-link'>Chat</router-link>
            </li>   
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out {{user.data.displayName}}</a>
              <!-- <div class="nav-item"></div> -->
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
  // import Search from './Search'


// import Search from './Search'
export default {
  components:{
  
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  },
  
};
</script>