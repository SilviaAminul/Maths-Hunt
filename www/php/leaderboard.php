<?php
include 'common.php';
?>

<?php
outputHeader();
outputNav('Leaderboard');
?>



<div class="main">
  <!-- Leaderboard table with sample names and scores -->




  <div id="Scores"></div>


  <!-- Heading for the table s-->
  <script src="../js/leaderboard.js"></script>


  <!-- Buttons to play again and refresh the page -->

  <div class="pa-buttons">
    <a class="custom-button" href="/php/index.php">Play !</a>

    <a class="custom-button" href="leaderboard.php">Refresh !</a>
  </div>






</div>

<?php
 'common.php';
outputFooter();
?>