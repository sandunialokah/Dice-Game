// function to get the score and roll the die
function roll(){ 
    // get 2 random numbers between 1 and 6 
    var randomnum1 = Math.floor(Math.random() * 6) + 1;
    var randomnum2 = Math.floor(Math.random() * 6) + 1;

    var score1 = document.getElementById("score1");  //display of score of player1
    var score2 = document.getElementById("score2");  //display of score of player2
    var player = document.getElementById("player").innerHTML;   // the player who should play next

    // displaying the correct image of the die according to the random numbers generated
    document.querySelector(".diceimg1").setAttribute("src", "./src/img/dice_" + randomnum1 + ".png");
    document.querySelector(".diceimg2").setAttribute("src", "./src/img/dice_" + randomnum2 + ".png");

    //display position of the winner
    var winner1 = document.getElementById("win1");
    var winner2 = document.getElementById("win2")

    if(player === "Player 1"){
        //if both die become 1 then the total score resets to 0
        if(randomnum1==1 && randomnum2==1){
            score1.innerHTML =0;
            document.getElementById("player").innerHTML = "Player 2";
        }
        //if both die get the same value except 1 the current player gets another chance to roll the die
        else if(randomnum1 == randomnum2){
            score1.innerHTML = parseInt(score1.innerHTML) + randomnum1 + randomnum2;
            //if the score exceeds 100 then the there is a winner to the game
            if(score1.innerHTML >= 100){
                winner1.innerHTML = "WINNER";
                winner1.style.color = "green";
                winner1.style.fontSize = "20px";
                alert("player 1 wins!!!!");
                score1.innerHTML = 100;
            }
            document.getElementById("player").innerHTML = "Player 1";
        }
        //if both die get 2 different numbers then those 2 get added to the total score
        else{
            score1.innerHTML = parseInt(score1.innerHTML) + randomnum1 + randomnum2;
            if(score1.innerHTML >= 100){
                winner1.innerHTML = "WINNER";
                winner1.style.color = "green";
                winner1.style.fontSize = "20px";
                alert("player 1 wins!!!!");
                score1.innerHTML = 100;
            }
            document.getElementById("player").innerHTML = "Player 2";
        }
        
    }
    else if(player === "Player 2"){
        //if both die become 1 then the total score resets to 0
        if(randomnum1==1 && randomnum2==1){
            score2.innerHTML = 0;
            document.getElementById("player").innerHTML = "Player 1";
        }
        //if both die get the same value except 1 the current player gets another chance to roll the die
        else if(randomnum1 == randomnum2){
            score2.innerHTML = parseInt(score2.innerHTML) + randomnum1 + randomnum2;
            if(score2.innerHTML >= 100){
                winner2.innerHTML = "WINNER";
                winner2.style.color = "green";
                winner2.style.fontSize = "20px";
                alert("player 2 wins!!!!");
                score2.innerHTML = 100;
            }
            document.getElementById("player").innerHTML = "Player 2";
        }
        //if both die get 2 different numbers then those 2 get added to the total score
        else{
            score2.innerHTML = parseInt(score2.innerHTML) + randomnum1 + randomnum2;
            if(score2.innerHTML >= 100){
                winner2.innerHTML = "WINNER";
                winner2.style.color = "green";
                winner2.style.fontSize = "20px";
                alert("player 2 wins!!!!");
                score2.innerHTML = 100;
            }
            document.getElementById("player").innerHTML = "Player 1";
        }
        
    }

}

// wait 2.5 seconds to execute roll function
function rollDie(){
    setTimeout(roll(), 2500);

}

const rollButton = document.getElementById("rollButton");
rollButton.addEventListener("click", rollDie);  //when the roll button is clicked the rollDie function will execute

//function to reset the scores and the player who should start after finishing a game
function reset(){
    //set the initial winner to an empty string
    document.getElementById("win1").innerHTML = "";
    document.getElementById("win2").innerHTML = "";
    //set the initial scores to 0
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;

    //set the first person to play by selecting randomly
    var play = Math.floor(Math.random() * 2) + 1;
    document.getElementById("player").innerHTML = "Player " + play;
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);  //when the reset button is clicked the reset function will execute