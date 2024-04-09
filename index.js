const div = document.createElement("div");
div.style.paddingTop = "10px";
const message = document.createElement("span");
const error = document.createElement("i");
$("#username").css("position", "relative");
error.className = "fa-solid fa-xmark";
error.style.color = "red";
error.style.fontSize = "30px";
error.style.position = "absolute";
error.style.left = "63%"


const successUser = document.createElement("i");
successUser.className = "fa-solid fa-check";
successUser.style.color = "green";
successUser.style.position = "absolute";
successUser.style.left = "63%";
successUser.style.fontSize = "30px";

const successPass = document.createElement("i");
successPass.className = "fa-solid fa-check";
successPass.style.color = "green";
successPass.style.position = "absolute";
successPass.style.left = "63%";
successPass.style.fontSize = "30px";


$("#login-container").submit(function(e){
    e.preventDefault();
    if(username.value ==="" ){
        message.innerHTML = "*please, enter username";
        $("#username").css("border-color", "red");
        $("#username").after(error);
        
    }else if(username.value !== "new_user"){
        message.innerHTML = "*please, enter valid username";
        $("#username").css("border-color", "red");
        $("#username").after(error);
    }else{
        $("#username").val();
        $("#username").css("border-color", "green");
        $("#username").after(successUser);
        
        if(password.value === ""){
            message.innerHTML = "*please, enter password";
            $("#password").css("border-color", "red");
            $("#password").after(error);
        }else if(password.value !== "123456789"){
            message.innerHTML = "*please, enter valid password";
            $("#password").css("border-color", "red");
            
        }else{
            error.style.display = "none";
            $("#password").css("border-color", "green");
            $("#password").after(successPass);
            message.innerHTML = "Successful login!"
            message.style.fontStyle = "italic";
        }
    }

     div.append(message);
    $("#login-container").append(div);

});
    
       

  
   

