<?php
function outputHeader(){
echo '
    <!DOCTYPE html>
    <html>

    <head>
    <link rel="stylesheet" href="../css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    </head>
    <body>
    <audio id="music" loop>
    <source src= "../music/dotto.mp3" type="audio/mp3"></audio>
';}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputNav($pageName){
    //Output banner and first part of navigation
    echo '<div class= "header">';
    echo '<div class="topnav">';
    echo '<a class="logo" href="index.php"><img src="../images/logo4.png" alt logo></a>';
    
    //Array of pages to link to
    $linkNames = array("Home", "Leaderboard", "How To Play");
    $linkAddresses = array("/php/index.php", "/php/leaderboard.php", "/php/howtoplay.php");
    

    $linkNamesRight = array("Login", "Register");
    $linkAddressesRight = array("/php/login.php", "/php/registerpage.php");
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'class="active" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }

    echo '</div>';

    // Outputs the right navigation for login and register
    echo '<div class="topnav-right">';
    for($x = 0; $x < count($linkNamesRight); $x++){
        echo '<a ';
        if($linkNamesRight[$x] == $pageName){
            echo 'class="active" ';
        }
        echo 'href="' . $linkAddressesRight[$x] . '">' . $linkNamesRight[$x] . '</a>';
    }
    // Closes off nav and header divs
    echo '</div></div>';
}


// background of the page
function mainBackground(){

    echo'  <div class= "main" style="position: relative; z-index: -2;" >
    </div>';

}




//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '<div class="botnav">
    <a href="about.php">About Us</a>
    <a href="privacypolicy.php">Privacy Policy</a>
    <a href="termsandconditions.php">Terms and Conditions</a>
  </div>

  <script src="../js/music.js"></script>

</body>

</html>
';
}