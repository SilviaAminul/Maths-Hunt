<?php
include 'common.php';
?>

<?php
outputHeader();
outputNav('Home');
?>


<!-- displays question box on the left side of the box --->


<div class="level-buttons">
    <!---using bootstap to make start answer button -->

    <button id="startButton" class="start btn btn-primary "> Start </button>

    <button id="easy" class="start btn btn-primary hide"> Easy </button>
    <button id="medium" class="start btn btn-primary hide"> Medium </button>
    <button id="hard" class="start btn btn-primary hide"> Hard </button>

</div>


<div class="gamebox-container">

    <div class="gamebox hide" name="question" id="Question">


    </div>
    <!-- displaues answer box on the right side of the box -->
    <div class="answer-section  hide" id="AnswerBox">
        <div id="wrong" style="color: red;"></div>
        <div id="right" style="color: green"></div>

        <!-- game analysis (question,answer and score) on the right side of the screen-->
        <p class="game-data">
            <div>
                Question:
                <label id="questionNumber">0</label>
            </div>

            <div>
                Answer:

                <input class="form-control" type="answer" placeholder=" Answer!" id="Answer" required>

                <button style="width:100%;" id="Submit" class="btn btn-primary">Check</button>
            </div>

            <div>

                Score:
                <label id="currentScore">0</label>
            </div>



        </p>

    </div>
</div>


<script src="../js/game.js"></script>




<?php
 'common.php';
outputFooter();
?>