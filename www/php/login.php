<?php
include 'common.php';
?>

<!-- Outputting header and navbar -->
<?php
outputHeader();
outputNav('Login');
?>


<div class="login">
  <!-- Showing the title -->
  <div class="text">Welcome Home Player
    <div id="loginPara">
      Email: <input type="email" id="Email"><br>
      Password: <input type="password" id="Password"><br>
      <button class="custom-button" onclick="login()">Login</button>
    </div>

    <div id="errors" style="color: red;">



    </div>



  </div>
</div>
</div>

</div>

<script src="../js/login.js"></script>


<?php
'common.php';
mainBackground();
?>


<?php
 'common.php';
outputFooter();
?>