<template>
  <div class="hello">
    <div class="jumbotron white">
    <div class="card my-1 text-center   ">
        <h1 class="card-header"> Welcome to Stat Chat</h1>
    
      <div class="card-body">
        

            <form @submit.prevent="enterChat" class="form-col">
            
                <label for="name">Welcome to Stat Chat no trolls allowed!!</label>
                <!-- <input type="text" name="name" v-model="name" ><input>  -->
                <p v-show='feedback' class="warning">{{feedback}}</p> 
                <div>
                <button class="btn btn-outline-secondary my-2 my-lg-0"> Enter </button>
                </div>
            </form>
    
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from "vuex";

export default {
 name:'Welcome',
 computed: {
        ...mapState({
            isLoggedIn: 'isLoggedIn',
        })
   ,
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
 data (){
     return {
         name:this.user.data.displayName,
         feedback: null 
     }
 },
 methods:{
     enterChat(){
         if(this.user.data.displayName){
             this.$router.push({name:'chat',params:{name:this.user.data.displayName}})
             this.feedback = null
         }else{
             this.feedback = 'You must be Logged in to use Chat'
         }
     }
 }
}
</script>

<style scoped>
  
</style>