//for timer

var secondaryAppConfig = {
  apiKey: "AIzaSyDj3--i6Shgp_hDLRzjJh35g43jlPt_Juc",
  authDomain: "sparsh-newsletter-29e95.firebaseapp.com",
  databaseURL: "https://sparsh-newsletter-29e95.firebaseio.com",
  projectId: "sparsh-newsletter-29e95",
  storageBucket: "sparsh-newsletter-29e95.appspot.com",
  messagingSenderId: "1015222199610",
  appId: "1:1015222199610:web:9fdc3bf357f9171be5dc03",
  measurementId: "G-JE8Z6YXP1V"
};
var secondary = firebase.initializeApp(secondaryAppConfig, "secondary");
var secondaryDatabase = secondary.database();

var timerRef = firebase.database().ref('timer');
timerRef.on('value' , gotData , errData);

//timer setup
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

function gotData(data){
  var timer = data.val();
	let countDown = new Date(timer).getTime();
	
	x = setInterval(function() {
      	let now = new Date().getTime(),
        distance = countDown - now;
        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
		//do something later when date is reached
		//if (distance < 0) {
		//  clearInterval(x);
		//  'YUPP!!! sparsh begins;
		//}
    }, second);  
}

function errData(err){
  console.log('error!! ' , err);
}
