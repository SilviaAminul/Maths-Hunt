//class connects button with my levels 
class LevelButton {
    text;
    level = "";
    //the constructor level get level  entered and text found in the button tags 
    constructor(level, text) {
        this.text = text;
        this.level = level;
    }

    //get level gets the level 
    getLevel() {
        return this.level;
    }
    //gets the text on the buttons
    getText() {
        return this.text;
    }
}


window.onload = () => {
    //gets start button as startbutton1
    const startButton1 = document.getElementById("startButton");
    //when start button is clicked the StartGame function is started 
    startButton1.addEventListener('click', StartGame);
    //gets easy button as easy which is hidden 
    const easy = document.getElementById("easy");
    //gets medium button as medium which is hidden 
    const medium = document.getElementById("medium");
    //gets hard button as hard which is hidden 
    const hard = document.getElementById("hard");
    //gets question section as game box which is hidden
    const gameBox = document.getElementById("Question");
    //gets answer section as answersection which is also hidden
    const answersection = document.getElementById("AnswerBox");
    //gets variable called level which ever is chose whichever button is chose will fill the empty strings 
    var level = '';
    //on click of the submit button answer will be checked 
    document.getElementById("Submit").addEventListener('click', checkAnswer);

    let answer;

    //question number  and currentscore are set to 0 
    var count = 0;
    var score = 0;

    // onclicking the button class will get the variables in the form of level and text 
    easy.addEventListener('click', () => changeButtonClick('easy', 'Easy'));
    medium.addEventListener('click', () => changeButtonClick('medium', 'Medium'));
    hard.addEventListener('click', () => changeButtonClick('hard', 'Hard'));

    // depending on which button is choosen it will get the level selected 
    function changeButtonClick(levelSelected, textSelected) {
        var buttonClicked = new LevelButton(levelSelected, textSelected);
        level = buttonClicked.getLevel();
        console.log(level)
        //onclicking a level all the buttons will hide 
        easy.classList.add('hide')
        medium.classList.add('hide')
        hard.classList.add('hide')
        //and the hide class on the question and asnwer box will be removed 
        gameBox.classList.remove('hide')
        answersection.classList.remove('hide');
        //load question or next question 
        nextQuestion();
    }

    //at the start of game once start button is clicked it will
    // remove start button and the levels from which the user can choose from will be displayed 
    function StartGame() {
        console.log('Started')
        startButton1.classList.add('hide')
        easy.classList.remove('hide')
        medium.classList.remove('hide')
        hard.classList.remove('hide')
    }


    //randomly generates opereations ranging from 0-3 (-1 because 0 is considered the first element of the list)
    function getRandomFromList(operators) {
        return operators[Math.round(Math.random() * (operators.length - 1))];
    }

    function nextQuestion() {
        //list of operations 
        //randomly select from list of operations
        var ops = [];
        var num1 = 0;
        var num2 = 0;
        console.log(level)
        if (level === 'easy') {
            ops = ["+", "-"];
            num1 = Math.floor(Math.random() * 10) + 1; //Numbers between 1 to 10
            num2 = Math.floor(Math.random() * 10) + 1; // Numbers between 1 to 10
        }
        if (level === 'medium') {
            ops = ["+", "-", "*"];
            num1 = Math.floor(Math.random() * 30) + 1; // Numbers between 1 to 30
            num2 = Math.floor(Math.random() * 30) + 1;
        } // Numbers between 1 to 30
        if (level === 'hard') {
            ops = ["+", "-", "*", "/"];
            num1 = Math.floor(Math.random() * 50) + 1; // Numbers between 1 to 50
            num2 = Math.floor(Math.random() * 50) + 1;
        } // Numbers between 1 to 30

        var randomOp = getRandomFromList(ops);


        // evaluates the operation provided in string format 
        answer = eval(num1 + randomOp + num2);
        console.log(`${num1} ${randomOp} ${num2} = ${eval(num1 + randomOp + num2)}`);
        //displayes text in the game 
        document.getElementById("Question").innerHTML = "What is the answer ? " + "<br>" + num1 + "<br>" +
            randomOp + "<br>" + num2;
    }
    //check if use  is logged in 
    function checkLogin() {
        if (sessionStorage.loggedInUsrEmail !== undefined) {
            return true;
        }
        return false;
    }


    //checks answer
    function checkAnswer() {
        var userAnswer = document.getElementById("Answer").value;
        var el1 = document.getElementById("Answer");
        // if answer inputted in the answer box is correct then the box border goes red 

        if (parseFloat(userAnswer).toFixed(2) == parseFloat(answer).toFixed(2)) {
            el1.classList.add("right");

            // if answer is correct the score is incremented vefore moving on to the next question 
            score++;

            //displays of score 
            document.getElementById("currentScore").innerHTML = score + "/" + "10";


            //or else answer is wrong therefore borders goes wrong
        } else {

            el1.classList.add("wrong");
        }

        // saves score in the local storage 
        localStorage.setItem("currentScore", score);
        //sets a timer for each time submit is pressed the border with stay red or green for a second before it diasppears
        setTimeout(() => {

            //loads next random maths problem 
            nextQuestion();
            document.getElementById("Answer").value = '';
            el1.classList.remove("right");
            el1.classList.remove("wrong");
        }, 1000);

        //counter increments for every question by one
        count++;

        // displayes current question number 
        document.getElementById("questionNumber").innerHTML = count + "/" + "10";

        //if count is more then 10 then it leads to end page meaning it is the end of game
        //and submit button is disables 
        console.log(count);
        if (count > 9) {
            document.getElementById("Submit").disabled;

            //if user is logged stores the score into session storage which is then saved 
            //into loacal storage under score 
            if (checkLogin()) {
                let loggedInUsrEmail = sessionStorage.getItem("loggedInUsrEmail");
                let usrObj = JSON.parse(localStorage.getItem(loggedInUsrEmail));
                let userScore = localStorage.getItem("currentScore");
                if (userScore > usrObj['score']) {
                    usrObj['mode'] = level;
                }
                localStorage.setItem(loggedInUsrEmail, JSON.stringify(usrObj));

            }

            //leads to end of game page 
            window.location = '/php/endpage.php';
        }
    }

}