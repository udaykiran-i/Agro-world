
function signUp(){
    var userName = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    // debugger

    if(password.length != 0 && userName.length != 0){
        location.href = location.pathname + "/explore.html"
    } else {
    alert("enter required credentials");
}}