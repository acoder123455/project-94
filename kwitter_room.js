// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
    authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
    databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
    projectId: "project-93-letschat-web-app-1",
    storageBucket: "project-93-letschat-web-app-1.appspot.com",
    messagingSenderId: "599747272052",
    appId: "1:599747272052:web:04fa716f9c059b29902021"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";


          firebase.database().ref("/").child(room_name).uptade({
          purpose: "Adding Room Name"

          const firebaseConfig = {
            apiKey: "AIzaSyATX95YN0D-7fFQ1mrM9OPFGGzLSzgrdAM",
            authDomain: "lets-chat-web-app-f3c2e.firebaseapp.com",
            projectId: "lets-chat-web-app-f3c2e",
            storageBucket: "lets-chat-web-app-f3c2e.appspot.com",
            messagingSenderId: "1089565589751",
            appId: "1:1089565589751:web:cad39ebb90b97a191f13f2",
            measurementId: "G-MLDLMEJ5T6"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();