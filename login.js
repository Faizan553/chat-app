// Sign in existing users
function login(){
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function(result){
      window.location="chat.html"
      
    })
    
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("There is no user record corresponding to this identifier.Please register your account")
      
    });
    }

    // facebook authorization


function loginfb(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        window.location="chat.html"
        console.log(user)
      }).catch(function(error) {
        
       
        console.log(error.message)
       
      });
}
