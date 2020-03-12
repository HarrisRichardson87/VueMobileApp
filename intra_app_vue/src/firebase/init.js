import firebase from "firebase"
import firestore from 'firebase/firestore'

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
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore()
  export default firebaseApp.firestore().settings({timestampsInSnapshots:true})
