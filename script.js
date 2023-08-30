function validateForm() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value

  if (password ==  "") {
    document.getElementById("message").innerHTML = "**Fill the password please!";
    return false;
  }

  if(password.length<8) {
    document.getElementById("message").innerHTML="**Password length must be at least 8 characters";
    document.getElementById("password").style.border = "red solid 2px"
    return false;
  }

  if(password.length>30) {
    document.getElementById("message").innerHTML="**Password length must not exceed 30 characters";
    document.getElementById("password").style.border = "red solid"
    return false;
  }

  if (password != confirm_password) {
    document.getElementById("message").innerHTML="**Passwords do not match";
    document.getElementById("password").style.border = "red solid"
    document.getElementById("confirm_password").style.border = "red solid"
    return false;
  }
}