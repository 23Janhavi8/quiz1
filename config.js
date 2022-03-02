import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnOCkQ5nY_qqAYiquvnNpBnO6ilU1KLGU",
  authDomain: "buzzer-ea225.firebaseapp.com",
  databaseURL: "https://buzzer-ea225-default-rtdb.firebaseio.com",
  projectId: "buzzer-ea225",
  storageBucket: "buzzer-ea225.appspot.com",
  messagingSenderId: "212639984764",
  appId: "1:212639984764:web:31d25a1201e36a2da66df9"
};



// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export default  firebase.database()