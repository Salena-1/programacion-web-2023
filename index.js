let email= ''
email= document.getElementById("email").value 
localStorage.setItem("email", email);
localStorage.getItem("email");
localStorage.clear();
localStorage.removeItem("email"); 