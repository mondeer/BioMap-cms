// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
var config = {
      apiKey: "AIzaSyBJUBq_Sac8OE1H3tzA5nB0MFQgaq0PjOc",
      authDomain: "imond-solutions.firebaseapp.com",
      databaseURL: "https://imond-solutions.firebaseio.com",
      projectId: "imond-solutions",
      storageBucket: "imond-solutions.appspot.com",
      messagingSenderId: "161648624064"
};
firebase.initializeApp(config);

window.firebase = firebase;

// Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
