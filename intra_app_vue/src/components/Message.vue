<template>
    <div class=" col"   >
        <div id="chatbox">
        <div class="card text-right" v-for="message in allChats" v-bind:key="message">
            <div v-if="message.user !== user.data.displayName ">
                <h5 class="card-header text-left">{{message.user}}</h5>
                <div class="card-body">
                    <p class="card-title text-left ">{{message.createdAt}}</p>
                    <p class="card-text text-left">{{message.message}}</p>
                </div>

            </div>
              <div v-else>
                <h5 class="card-header">{{message.user}}</h5>
                    <p class="card-title ">{{message.createdAt}}</p>
                <div class="card-body">
                    <p class="card-text">{{message.message}}</p>
                </div>

            </div>
           </div>
            </div>


            <div class="center">

                <div class="text-center">
                    <form onChange="addMessage" @submit.prevent="post">
                        <label for="new-message">New Message (enter to add):</label>
                        <input @change.prevent="timer" class="form-control input-lg" type="text" name="new-message" v-model="newMessage">
                        <button type="submit" class="btn btn-warning btn-lg">Submit</button>

                    </form>

                </div>
            </div>
        </div>
        <!--  Fin de la caja de chat con bootstrap -->

</template>

<script>

    import {
        mapGetters
    } from "vuex";

    export default {

        name: 'Message',
        prop: ['name'],
        data() {
            return {
                number:0,
                time:null,
                newMessage: null,
                allChats: []
            }
        },
        methods: {
            post: function () {
                this.allChats = [];
                window.db.collection("chats").add({
                    message: this.newMessage,
                    user: this.$route.params.name,
                    createdAt: this.time,
                    order: new Date(),
                   

                })
                this.newMessage = ''
                    .then(function (docRef) {
                        alert("Document written with ID: ", docRef.createdAt);
                        alert(this.$route.params.name)
                    })
                    .catch(function (error) {
                        alert("Error adding document: ", error);
                    });

                window.db.collection('chats').orderBy("order").limit(10).onSnapshot((querySnapShot) => {
                    let allMessages = [];
                    this.allChats = [];
                    querySnapShot.forEach(doc => {
                        allMessages.push(doc.data())
                       
                    })
                    
                    this.allChats = allMessages.reverse()
                 
                })

            },timer (){
                            
                            var today = new Date(); 
                            var dd = String(today.getDate()).padStart(2, '0');
                            var mm = String(today.getMonth() + 1).padStart(2, '0');
                            var yyyy = today.getFullYear();
                            this.number ++;
                            today = mm + '/' + dd + '/' + yyyy;
                            this.time = today;

                    
            }
        },
        created() {
            window.db.collection('chats').orderBy('order').onSnapshot((querySnapShot) => {
                let allMessages = [];
               
                querySnapShot.forEach(doc => {
                    allMessages.push(doc.data())
                })
            
                this.allChats = allMessages.reverse()
            })
        },
        computed: {
            ...mapGetters({
                user: "user"
            })
        }
    }
</script>
<style>
    b-card {
        border: 1px solid grey;
    }
    #chatbox{
        display: flex;
        flex-direction: column-reverse;
        height:400px;
        overflow: auto; 
    }
</style>