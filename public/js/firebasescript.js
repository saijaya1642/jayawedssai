// import { firebase } from '@firebase/app';
// import '@firebase/firestore'

// const firebase = require('@firebase/app')
// const firestore = require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyCt9jAJWDo2tw9QS6Ezj9DR7Uq4z4Y8dP4",
    authDomain: "swapnawedsramkumar.firebaseapp.com",
    projectId: "swapnawedsramkumar",
    storageBucket: "swapnawedsramkumar.appspot.com",
    messagingSenderId: "884897018730",
    appId: "1:884897018730:web:3914ff74aa708f40472b13"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

//   const submitBtn = document.querySelector('#inviteButton')
  
//   let guestEmail = document.querySelector('guestemail')
//   let guestName = document.querySelector('guestname')

  const db = firestore.collection('Guests');

  console.log("enter")
  document.getElementById("inviteButton").addEventListener('click', function(e){
        e.preventDefault();
      let guestName = document.getElementById('guestemail').value
      let guestEmail = document.getElementById('guestname').value
      let time = date.now();
      
      if(guestName===null || guestEmail===null || guestName==='' || guestEmail==='' ){
        alert("Enter name and Email")
      }
      else{
        db.doc().set({
            guestName: guestName,
            guestEmail : guestEmail,
            time : time
          }).then(function(){
            console.log("Data Saved")
        }).catch(function(error){
            console.log(error)
        })
      }

      
    
  })