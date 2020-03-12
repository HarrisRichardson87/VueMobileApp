<template>
   
    <div>
    <div  v-if="allComments.length > 0">
        <ul class="card-list" v-for="comment in allComments" v-bind:key="comment">
            <li class="card">
                
                <div class="card-body">
                    <h4 class="card-heading">
                        {{comment.user}} 
                        <br>
                        <small>
                            commented at {{comment.createdAt}}
                        </small>
                    </h4>
                    <p>
                        {{comment.comment}}
                        </p>
                </div>
            </li>
        </ul>

    </div>
            <div class="card my-4">
                <h5 class="card-header">Leave a Comment:</h5>
                <div class="card-body">
                    <form @submit.prevent="post" >
                        <div class="form-group">
                            <textarea @change.prevent="timer" v-model="newComment" class="form-control" rows="3"></textarea>
                        </div>
                        <button  type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
    </div>
   
</template>

<script>
    // import { mapState } from 'vuex'
    import {
        mapGetters
    } from "vuex";
// import func from '../../vue-temp/vue-editor-bridge';

    export default {
        name: 'Comment',
        prop: ['name'],
        computed: {

            ...mapGetters({
                // map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
        data() {
            return {
                time:null,
                newComment: null,
                allComments: []
            }
        },
        methods: {
            post: function () {
                window.db.collection("comments").add({
                    comment: this.newComment,
                    user: this.user.data.displayName,
                    createdAt: this.time,
                    order: new Date()



                })
                

                    .then(function (docRef) {
                        alert("Document written with ID: ", docRef.createdAt);
                        alert(this.$route.params.name)
                        this.newComment = null
                    })
                    .catch(function (error) {
                        alert("Error adding document: ", error);
                    });

                window.db.collection('comments').orderBy('order').onSnapshot((querySnapShot) => {
                    let allComments = [];
                    querySnapShot.forEach(doc => {
                        allComments.push(doc.data())
                    })
                    this.allComments = allComments;
                })

            }, timer (){
                            
                            var today = new Date(); 
                            var dd = String(today.getDate()).padStart(2, '0');
                            var mm = String(today.getMonth() + 1).padStart(2, '0');
                            var yyyy = today.getFullYear();

                            today = mm + '/' + dd + '/' + yyyy;
                            this.time = today;

                    
            }
        },
        created() {
            window.db.collection('comments').onSnapshot((querySnapShot) => {
                let allComments = [];
                querySnapShot.forEach(doc => {
                    allComments.push(doc.data())
                })
                this.allComments = allComments;
            })
        }
    }
</script>
<style >
small{
     font-family: 'Roboto', sans-serif;
     color:grey;
}
</style>