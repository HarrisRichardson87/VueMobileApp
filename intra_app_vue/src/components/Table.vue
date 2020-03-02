<template>
  <div v-cloak>
    <div v-if="!loaded">
      <img class="blink_me" src="../assets/logo.png" height="150">
    </div>
    <div class="table-responsive" v-if="loaded">
        <input v-model="search"  v-on:change='suggester' class="form-control mr-sm-2" @keyup="suggester"/>
      <table id="table" class="table table-striped table-bordered table-sm table-hover">
        <thead>
          <tr>
            <th v-on:click = "sorter" scope="col" id="name">Player</th>
            <th v-on:click = "sorter" scope="col" id="team" >Team</th>
            <th v-on:click = "sorter" scope="col" id="fifa">Fifa</th>
            <th v-on:click = "sorter" scope="col" id="apm">APM</th>
            <th v-on:click = "sorter" scope="col" id="aug"> Aug</th>
            <th v-on:click = "sorter" scope="col" id="apmse">APMSE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in suggestions" v-bind:key="item">
            <td scope="row" v-on:click = "sender">{{ item.name }}</td>
            <td>{{ item.teams }}</td>
            <td>{{ item.fifa }}</td>
            <td >{{ item.APM}}</td>
            <td >{{ item.AugAPM }}</td>
            <td >{{item.AugAPMSE}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Table',
    props: {
      msg: String,
       searchData:{
            type:String
        }
      

    },
    data: function () {
      return {
        data: [],
        suggestions: null,
        search: '',
        dataBox: null,
        loaded: false

      }
    },
    methods: {
      sender(e){
        this.search = e.target.innerHTML
        alert(e.target.innerHTML)
        this.$emit('filterToFather', this.search)
        this.props.searchData = e.target.innerHTML
        this.search = e.target.innerHTML
    
      },
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
      },
      submit(e) {
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
      axios.get('http://localhost:5000/leagues/by/Premier/2018/')
        .then((response) => {

          return response
        }).then((json) => {

          
          let copy = json.data[0].seasons[0].players.map(player => player)
          
          copy.forEach(element => {
            element.APM = element.APM.toFixed(3)
            element.AugAPM = element.AugAPM.toFixed(3)
            element.AugAPMSE = element.AugAPMSE.toFixed(3)


          });
   
          this.dataBox = copy
          this.suggestions = this.dataBox
          this.loaded = true
        })
    },
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