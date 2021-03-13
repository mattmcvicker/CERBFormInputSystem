import firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATadRzpSl7mXDi29VM42bDSy3CZQlNSLk",
    authDomain: "cerb-web-app.firebaseapp.com",
    databaseURL: "https://cerb-web-app-default-rtdb.firebaseio.com",
    projectId: "cerb-web-app",
    storageBucket: "cerb-web-app.appspot.com",
    messagingSenderId: "717028875841",
    appId: "1:717028875841:web:6e5aaadc64aebeb845b0c0",
    measurementId: "G-LQLSRVWMKN"
  };


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };