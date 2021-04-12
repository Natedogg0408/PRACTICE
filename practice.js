
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyArJ3sJiyNnYezOCgm6JvR894tzA9Vko5k",
    authDomain: "practice-cd085.firebaseapp.com",
    databaseURL: "https://practice-cd085-default-rtdb.firebaseio.com",
    projectId: "practice-cd085",
    storageBucket: "practice-cd085.appspot.com",
    messagingSenderId: "406803822279",
    appId: "1:406803822279:web:8fa548a57735d0c71d70e2",
    measurementId: "G-2T5JW8D524"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      username = document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose: "add a user"
      });
      
  }