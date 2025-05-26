function loginBtn(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let username1 = "owethu",password1 = "owethulogin";
    let username2 = "jazzjuune",password2 = "jazzjuunelogin";
    let username3 = "wooks",password3 = "wookslogin";

    if(username == username1 && password == password1){
        alert("welcome Owethu");
    }
    else if (username == username2 && password == password2){
        alert("welcome jazzjuune");
    }
    else if(username == username3 && password == password3){
        alert("welcome wooks");
    }
    else{
        alert("wrong details")
    }
}