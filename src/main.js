import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCFNE-nR9yQm7aCbWpvb3H36jmXKxBK2KA",
    authDomain: "name-judge.firebaseapp.com",
    projectId: "name-judge",
    storageBucket: "name-judge.appspot.com",
    messagingSenderId: "486436620514",
    appId: "1:486436620514:web:36fa65e818e0f86936f6bb",
    measurementId: "G-GJMN08BHS1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
