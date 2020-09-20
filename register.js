
// Sign up new users

function register(){
    var email = document.getElementById('email-new')
    var password = document.getElementById('password-new')
   
    
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  
    .then(function(result){
      console.log(result)
      window.location="index.html"
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message)
    })
      
  
    }