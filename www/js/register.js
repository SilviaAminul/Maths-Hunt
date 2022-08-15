window.onload = init;
//on loading it will have varables called errors and passwords
function init() {
  button = document.getElementById("Password");
  errors = document.getElementById("errors");
}

//regex for validating the input fields in the register page//

function validateEmail(email) { //regex to set validation for email 
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
//password validationg function
function validatePassword(p) {
  //password validation where length is more than 8

  if (p.length < 8) {
    console.log("Your password must be at least 8 characters");
    show_error("Your password must be at least 8 characters");
    return false;
  }

  //at least one small cap letter is requires
  if (p.search(/[a-z]/) < 0) {
    console.log("Your password must contain at least one letter.");
    show_error("Your password must contain at least one letter.");
    return false;
  }

  //at least on cap letter is required 
  if (p.search(/[A-Z]/) < 0) {
    console.log("Your password must contain at least one capital letter.");
    show_error("Your password must contain at least one capital letter.");
    return false;
  }
  //must contain at least one number from 1 to 9 
  if (p.search(/[0-9]/) < 0) {
    console.log("Your password must contain at least one digit.");
    show_error("Your password must contain at least one digit.");
    return false;
  }

  return true;
}
//if not the show errors function
//error function 
function show_error(error_text) {
  document.getElementById("errors").innerHTML = error_text;
}


//if field is empty 
function validateForm(user) {
  //if empty strings are inputted
  if (user.uname === "") {
    //produce the follwoing message 
    console.log(" Please enter your name ");
    show_error("Please enter your name ");
    return false;
  }

  //if name is less than less than one 
  if (user.uname.length < 2) {
    console.log("Name is too short ");
    //then produce the follwowing message 
    show_error("Name is too short");
    return false;
  }
  // add another verification if the user already exists
  if (user.email === "") {
    console.log("Please enter an email ");
    show_error("Please enter an email");
    return false;
  }
  //if invalid email is inputted
  if (!validateEmail(user.email)) {
    console.log("email is not valid");
    show_error("Email is not valid, please enter a valid email address");
    return false;
  }
  //if password is empty it creates the message below
  if (user.password === "") {
    console.log("password field is empty");
    show_error("Password field is empty");
    return false;
  }
  if (!validatePassword(user.password)) {
    return false;
  }

  //if confirm password is left empty
  var confirm_password = document.getElementById("confirm_password").value;
  if (confirm_password === "") {
    console.log("Confirm password field is empty.");
    show_error("Confirm password field is empty.");
    return false;
  }
  //if confrim password field does not match password field it displayes the following message
  if (user.password !== confirm_password) {
    console.log("Password does not match please try again");
    show_error("Password does not match please try again");
    return false;
  }

  //user will see the following message if number field is left empty
  if (user.nmbr == "") {
    console.log("Phone number field cannot be empty ");
    show_error("Phone number field cannot be empty ");
    return false;
  }
  return true;
}
//removes any erros messages
function storeUser() {
  document.getElementById("errors").innerHTML = "";
  // in case error is still shown onclick, removes it
  var usrObject = {};
  //these are the variables that are going to be stored

  usrObject.uname = document.getElementById("Name1").value;
  usrObject.email = document.getElementById("Email").value;
  usrObject.password = document.getElementById("Password").value;
  usrObject.country = document.getElementById("Country").value;
  usrObject.nmbr = document.getElementById("Number").value;
  usrObject.score = 0;
  usrObject.mode = '';
  console.log(usrObject);
  if (validateForm(usrObject)) {
    localStorage[usrObject.email] = JSON.stringify(usrObject);
    document.getElementById("success_status").innerHTML = "<b>Registration successful.</b>";
    setTimeout(function () {
      document.getElementById("success_status").innerHTML = "";
      window.location = '/php/login.php';
    }, 3000);
  } else {
    // leaves error shown for 5 seconds then removes it
    setTimeout(function () {
      document.getElementById("errors").innerHTML = "";
    }, 5000);
  }

}