var firebaseConfig = {
    apiKey: "AIzaSyDtF6PqKzqCq9aAV_lQO4EBDvMB8h20KaQ",
    authDomain: "web-chat-app-9569b.firebaseapp.com",
    databaseURL: "https://web-chat-app-9569b-default-rtdb.firebaseio.com",
    projectId: "web-chat-app-9569b",
    storageBucket: "web-chat-app-9569b.appspot.com",
    messagingSenderId: "1036626589143",
    appId: "1:1036626589143:web:58bf36375809c940c90792"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username+"!";

