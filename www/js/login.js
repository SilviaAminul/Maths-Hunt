window.onload = checkLogin; //Check to see if user is logged in already



function checkLogin() {
    if (sessionStorage.loggedInUsrEmail !== undefined) {
        //Extract details of logged in user
        let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsrEmail]);

        //Say hello to logged in user
        document.getElementById("loginPara").innerHTML = usrObj.email + " logged in.";
    }
}
let cookies = document.cookie;
//once browser is closed it automatically removes logged in users froms session storage 
function logout() {
    sessionStorage.loggedInUsrEmail = undefined;
}
//logs in the user
function login() {
    //Get email address
    let email = document.getElementById("Email").value;

    //If Uses does not have an account
    if (localStorage[email] === undefined) {
        //Inform user that they do not have an account
        document.getElementById("errors").innerHTML = "Email not recognized. Please enter or register an account.";
        return; //Do nothing else
    } else { //User has an account
        let usrObj = JSON.parse(localStorage[email]); //Convert to object
        //gets password from local storage
        let password = document.getElementById("Password").value;
        //if password matches matches password from local storage the allows successfull login
        if (password === usrObj.password) { //Successful login
            //if succesfull the produces a message showing login is successful 
            document.getElementById("loginPara").innerHTML = usrObj.email + " logged in.";
            document.getElementById("errors").innerHTML = ""; //Clear any login failures
            //records the email of the user that is logged in 
            sessionStorage.loggedInUsrEmail = usrObj.email;

            //leads to the game page automatically 
            window.location = '/php/game.php';
        } else { //if password is incorrect it produces the following message 
            document.getElementById("errors").innerHTML = "Password not correct. Please try again.";
        }
    }
}