import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';


import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
Vue.config.productionTip = false
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCXw6xl03MFCCLNwxX0U7S7sbg1mOPF5qo",
  authDomain: "intraocular-vue.firebaseapp.com",
  databaseURL: "https://intraocular-vue.firebaseio.com",
  projectId: "intraocular-vue",
  storageBucket: "intraocular-vue.appspot.com",
  messagingSenderId: "203860167779",
  appId: "1:203860167779:web:0f43a52a848b1fdb64fc56",
  measurementId: "G-228E5HYDC5"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()

window.db = db

// firebase.auth().onAuthStateChanged(user =>  {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
