
 //for newsletter

 
 // Your web app's Firebase configuration
  var firebaseConfig = {
     apiKey: "AIzaSyDj3--i6Shgp_hDLRzjJh35g43jlPt_Juc",
     authDomain: "sparsh-newsletter-29e95.firebaseapp.com",
     databaseURL: "https://sparsh-newsletter-29e95.firebaseio.com",
     projectId: "sparsh-newsletter-29e95",
     storageBucket: "sparsh-newsletter-29e95.appspot.com",
     messagingSenderId: "1015222199610",
     appId: "1:1015222199610:web:9fdc3bf357f9171be5dc03",
     measurementId: "G-JE8Z6YXP1V"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
//reference message collection

var messageRef = firebase.database().ref('messages');

document.getElementById('news-letter').addEventListener('submit' , submitEmail);

function submitEmail(e){
     e.preventDefault();
     var email = document.getElementById('email').value;
     saveMessage(email);
     document.querySelector('.alert').style.display = 'block';
     setTimeout(function(email){
          document.querySelector('.alert').style.display = 'none';
          document.getElementById('email').value=null;
          
     } , 3000);
}

//save message to firebase;
function saveMessage(email){
      var newMessageRef = messageRef.push();
      newMessageRef.set({
           email : email
      });
       
}