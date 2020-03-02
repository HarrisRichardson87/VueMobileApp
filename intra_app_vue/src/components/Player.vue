<template>
  <div v-cloak>
    <div v-if="!loaded && searchData.length > 4">
      <img class="blink_me" src="../assets/logo.png" height="150">
    </div>
   
    <div class="table-responsive" v-if="loaded && data.length">
        
    <h1><span>{{ searchData }}</span></h1>
      <table id="table" class="table table-striped table-bordered table-sm table-hover">
        <thead>
        
          <tr>
           
            <th v-on:click = "sorter" scope="col" id="team" >Team</th>
            <th v-on:click = "sorter" scope="col" id="fifa">Fifa</th>
            <th v-on:click = "sorter" scope="col" id="apm">APM</th>
            <th v-on:click = "sorter" scope="col" id="aug"> Augmented</th>
            <th v-on:click = "sorter" scope="col" id="apmse">APMSE</th>
          </tr>
        </thead>
        <tbody>
         <tr v-for="item in data" v-bind:key="item">
            <td>{{ item[0].teams }}</td>
            <td>{{ item[0].fifa }}</td>
            <td >{{ item[0].APM}}</td>
            <td >{{ item[0].AugAPM }}</td>
            <td >{{item[0].AugAPMSE}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name: 'Player',
  props: {
    msg: String,
      searchData:{
            type:String
        }
   
  },
    data: function () {
      return {
        data: null,
        suggestions: null,
        search: '',
        dataBox: null,
        loaded: false

      }
    },
    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
      },
      submit(e) {
        alert('Submit')
        e.preventDefault()
        this.$emit('filterToFather', this.search)
      },
      setter(e) {
        this.search = e.target.value
        this.suggestions = null;
      },
      suggester(e) {
        e.preventDefault()
        this.text = e.target.value
        const value = e.target.value
        let suggestions = [];
        if (value.length > 0) {
          let regex = new RegExp(`^${value}`, 'i')
        
              let copy = this.dataBox
              suggestions = copy.sort().filter((v) => {
                if(regex.test(v.name)) return true;
                if(regex.test(v.teams)) return true;
              })
              this.suggestions = suggestions
          
      }else {
        this.suggestions = this.dataBox
      }
    },
    sorter(e){
   
      let copy = []
      copy = this.suggestions
      if(e.target.id === "name"){
      copy.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      return 0;
      });}
      
      else if(e.target.id === "team"){
      copy.sort(function(a, b) {
        var nameA = a.teams.toUpperCase(); 
        var nameB = b.teams.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      return 0;
      });}
      
      else if(e.target.id === "fifa"){
        copy.sort(function(a, b) {
          return b.fifa - a.fifa;
        });
      }
      
      else if(e.target.id === "apm"){
        copy.sort(function(a, b) {
          return b.APM - a.APM;
        });
      }
      
      else if(e.target.id === "aug"){
        copy.sort(function(a, b) {
          return b.AugAPM - a.AugAPM;
        });
      }
      else{
        copy.sort(function(a, b) {
          return a.AugAPMSE - b.AugAPMSE;
        });
      }
      this.suggestions = copy
     
    },
     
    
    },
    mounted() {
      axios.get('http://localhost:5000/leagues/by/Premier/allseasons/')
        .then((response) => {

          return response
        }).then((json) => {

            this.dataBox = json
            this.loaded = true
        })
    }, 
   watch: {
  searchData: {
    // the callback will be called immediately after the start of the observation
    immediate: true, 
     deep: true,
    handler () {
      let box = [];
      for(let i = 0; i < 4 ; i ++){
          let pusher = this.dataBox.data.seasons[i].players.filter(player => player.name === this.searchData)
          if(pusher.length){ 
              pusher[0].APM = pusher[0].APM.toFixed(3)
              pusher[0].AugAPM = pusher[0].AugAPM.toFixed(3)
              pusher[0].AugAPMSE = pusher[0].AugAPMSE.toFixed(3)
              
              box.push(pusher)
          }
      }
       
      this.data = box

      
    }
  }},
  template: '<h3>{{ postTitle }}</h3>'
  
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }

  .blink_me {
    animation: blinker 4s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  .over{
    overflow:scroll
  }
</style>