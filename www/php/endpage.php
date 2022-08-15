<?php
include 'common.php';
?>

<!-- Outputting header and navbar -->
<?php
outputHeader();
outputNav('Home');
?>

<!-- Main content of the page -->
<div class="textcontainer">

  <div class="text">
    <a class="trophy" href="endpage.php"><img src="../images/firstplace.png"></a>

    <h3>Game Analysis</h3>
    <div>
      <h1> Score: </h1>
      <p class="endgamezero" id="score"></p>

    </div>


  </div>

  <script src="../js/endpage.js"></script>



  <!--the followign buttons will either redirect the page to the main page where by they can play again or 
lead the user to the leaderboard page-->

  <div class="pa-buttons">
    <a class="custom-button" href="/php/index.php">Play A Game !</a>

    <a class="custom-button" href="leaderboard.php">Check your opponents !</a>
  </div>
</div>

</div>

<?php
'common.php';
mainBackground();
?>

<?php
 'common.php';
outputFooter();
?>