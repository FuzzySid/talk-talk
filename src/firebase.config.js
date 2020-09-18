import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3Mqz7fvr8kLNKyZ-1LbTTT4s-t2fKX74",
    authDomain: "talk-talk-42701.firebaseapp.com",
    databaseURL: "https://talk-talk-42701.firebaseio.com",
    projectId: "talk-talk-42701",
    storageBucket: "talk-talk-42701.appspot.com",
    messagingSenderId: "274048115706",
    appId: "1:274048115706:web:548e0e29a500d528cbfa43",
    measurementId: "G-VR6GPBWPL3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};