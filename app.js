



// get data



function getdata(){
  var chat=document.getElementById('chat')
  firebase.database().ref('message').on('child_added',function(data){
    var html = ""
    
    if (data.val().name==name){
      html +="<p class='right msg-p'>"
      
      html +=data.val().name + " : " + data.val().user 
      html +="<button id= " + data.val().key + " onclick='remove(this)' class='delete-btn'>"
      html +="Delete"
      html +="</button>"
      html +="</p>"
      }
    else{
      html +="<p class='sec-user'>"
      html +=data.val().name + " : " + data.val().user 
      html +="</p>"
      }
       chat.innerHTML+=html;})
}

  


var name = prompt("Enter Your Name")






// send data


function send(){
  var  msg = document.getElementById('msg')
key = firebase.database().ref('message').push().key

object={
  name:name,
  user:msg.value,
key:key
}

firebase.database().ref('message').child(key).set(object)
msg.value=" "
}
  

function remove(e){
  
console.log(e.id)
firebase.database().ref('message').child(e.id).remove()
e.parentNode.remove()

}





 



