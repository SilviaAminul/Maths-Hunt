 //checks if user is logged in 
 function checkLogin() {
   if (sessionStorage.loggedInUsrEmail !== undefined) {
     return true;
   }
   return false;
 }

 //gets current score from local storage 
 let userScore = localStorage.getItem("currentScore");
 //sets userscore to 0 
 //if user does play the score will be displayed in the end replacing the 0
 if (userScore === null) {
   document.getElementById("score").innerText = 0;
   //converts strings into actual number 
 } else {
   userScore = parseInt(userScore);
   document.getElementById("score").innerText = userScore;
 }

 //checks if user is logged in 
 if (checkLogin()) {
   let loggedInUsrEmail = sessionStorage.getItem("loggedInUsrEmail");
   let usrObj = JSON.parse(localStorage.getItem(loggedInUsrEmail));

   // if the score scored is higher then the their previous score then it replaces it,
   // if not score stays the same 
   if (parseInt(usrObj.score) < userScore) {
     usrObj['score'] = userScore;
     localStorage.setItem(loggedInUsrEmail, JSON.stringify(usrObj));
   }
 }

 //updates score depending if score has been improved on 
 function updateScore() {
   //calls current item from local storage 
   let newScore = localStorage.getItem("currentScore");
   //check if user logged in and converts it
   if (sessionStorage.loggedInUser !== undefined) {
     let usr = JSON.parse(localStorage[sessionStorage.loggedInUser]);
     //if user is new or if score is smaller than new score

     if (usr.score === undefined || usr.score < newScore) {
       //then score is set to new score 
       usr.score = newScore;
       localStorage[usr.uname] = JSON.stringify(usr);
     }
   }

 }