<template>

  <form v-on:submit="submit" class="col">
    <input v-model="search" v-on:change='suggester' class="form-control mr-sm-1" @keyup="suggester" />

    <ul class="list-group">
      <option class="list-group-item" v-on:click='setter' v-for="suggest in suggestions" v-bind:key="suggest">{{suggest}}</option>
      
      <a to='/search'><button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button></a>
    </ul>

  </form>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Search',
    props: {
      msg: String,


    },
    data: function () {
      return {
        data: [],
        suggestions: null,
        search: '',
        dataBox: null

      }
    },
    methods: {
      submit(e) {
        alert('Submit')
        e.preventDefault()
        this.$emit('filterToFather', this.search)

      },
      setter(e) {
        e.preventDefault()
        this.search = e.target.value
        this.suggestions = null;
        this.$emit('filterToFather', e.target.value);
        this.search = ''
      },
      suggester(e) {
        e.preventDefault()

        this.text = e.target.value
        const value = e.target.value
        let suggestions = [];
        if (value.length > 0) {
          let regex = new RegExp(`^${value}`, 'i')
          let copy = this.dataBox
          suggestions = copy.sort().filter(v => regex.test(v))
          // alert(suggestions)
          this.suggestions = suggestions
        } else {
          this.suggestions = null
        }
      }
    },
    mounted() {
      axios.get('http://localhost:5000/leagues/by/Premier/2018/')
        .then((response) => {

          return response
        }).then((json) => {

          this.dataBox = json.data[0].seasons[0].players.map(player => player.name)
        })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  option :hover {
    background-color:grey;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>