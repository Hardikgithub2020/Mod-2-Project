import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDzmD80p6knp3r5MH7mSs8gume3lgwm4r0",
    authDomain: "breweries-35897.firebaseapp.com",
    databaseURL: "https://breweries-35897.firebaseio.com",
    projectId: "breweries-35897",
    storageBucket: "breweries-35897.appspot.com",
    messagingSenderId: "894343674316",
    appId: "1:894343674316:web:ca3fdb02a71ac050674569"
  };

 //Initialize firebase
var Fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default Fire;