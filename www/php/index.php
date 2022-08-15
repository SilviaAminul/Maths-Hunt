<?php
include 'common.php';
?>

<?php
outputHeader();
outputNav('Home');
?>


<div class="animationbox">

  <img src="../animation/animation.gif" alt="animation displayed in here"
    style="height: 450px; width: 900px; border: 1px solid #4F2F48" />


</div>
<div class="startbutton">
  <div class="text">
    <a class="custom-button" href="game.php">Press to Start</a>

  </div>
</div>

<div class="registerhome">
  <div class="text">
    <a class="custom-button" href="registerpage.php">Register!</a>
  </div>
</div>

</div>
<canvas id="background-canvas"></canvas>
<script src="../js/canvas.js"></script>


<?php
'common.php';
mainBackground();
?>

<?php
 'common.php';
outputFooter();
?>