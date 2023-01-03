var attempt = 3; 
function validate(){
var username = document.getElementById("Username").value;
var password = document.getElementById("password").value;
if ( username == "Richard" && password == "Password123"){
alert ("Login successfully");
window.location = "Account.html"; 
return false;
}

else{
attempt --;
alert("You have "+attempt+" attempt Remaining;");


if( attempt == 0){
document.getElementById("Username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}