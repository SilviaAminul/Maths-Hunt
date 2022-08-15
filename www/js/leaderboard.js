window.onload = () => {
  //Check if user is logged in greet user 
  if (sessionStorage.loggedInUser !== undefined) {
    document.getElementById("Greeting").innerHTML = "Hello " + sessionStorage.loggedInUser;
  }

  loadRankingTable();

  //Loads ranking table into page (headings of each columns )
  function loadRankingTable() {
    let str = "<table><tr><th>Name</th><th>Score</th><th>Mode</th></tr>";
    //removes current scores 
    localStorage.removeItem("currentScore");
    // calls username score and mode played in  which are saved from the local storage 
    for (let key of Object.keys(localStorage)) {
      console.log(key)
      let usr = JSON.parse(localStorage[key]);
      str += `<tr><td> ${usr.uname} </td><td> ${usr.score} </td><td>${usr.mode}</td></tr>`;
    }
    str += "</table>";
    document.getElementById("Scores").innerHTML = str;

  }

}