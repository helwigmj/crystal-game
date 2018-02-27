// So JavaScript won't load until the page is done loading :)
$(document).ready(function(){


// The random number shown at the start of the game should be between 19 - 120.
var minNumber = 19;
var maxNumber = 120;

// Creats a variable that will store the function randomNumberFromRange
var randomNumber = randomNumberFromRange(minNumber, maxNumber);
// Creates a random number between 19 and 120
function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Calls the randomNumber function
randomNumberFromRange();

// And writes the random number onto the page 
document.getElementById('random-number').innerHTML = randomNumber;

// Sets wins, losses, and current score at 0
var winCounter = 0;
var lossCounter = 0;
var currentScore = 0;


// Function that will reset the current score, crystal values, and random number
function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    $('#random-number').text(randomNumber);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    currentScore= 0;
    $('#currentScore').text(currentScore);
}



// Creates function that will add one to the wins/reset the game
function win () {
    alert("YAAAAAAASSSSS!!!");
    winCounter++;
    $("#winCounter").text(winCounter);
    reset ();
}

// Creates function that will add one to the losses/reset the game
function loss () {
    alert("NOOOOOOO!")
    lossCounter++;
    $("#lossCounter").text(lossCounter);
    reset ();
}


// Sets up number values for crystals between 12 and 1
var num1= Math.floor(Math.random()*11+1);
var num2= Math.floor(Math.random()*11+1);
var num3= Math.floor(Math.random()*11+1);
var num4= Math.floor(Math.random()*11+1);


// On click functions appends value to cystals and adds this to the total score
// and runs win/ loss functions if there is a win/loss for each crystal
$('#one').on ('click', function(){
    currentScore = currentScore + num1;
    console.log("New userTotal= " + currentScore)
    $('#currentScore').text(currentScore);
        if (currentScore === randomNumber) {
           win ();
        } else if (currentScore > randomNumber) {
           loss ();
        }
  })
  
  $('#two').on ('click', function(){
    currentScore = currentScore + num2;
    console.log("New userTotal= " + currentScore)
    $('#currentScore').text(currentScore);
        if (currentScore === randomNumber) {
           win ();
        } else if (currentScore > randomNumber) {
           loss ();
        }
  })
  
  $('#three').on ('click', function(){
    currentScore = currentScore + num3;
    console.log("New userTotal= " + currentScore)
    $('#currentScore').text(currentScore);
        if (currentScore === randomNumber) {
            win ();
        } else if (currentScore > randomNumber) {
            loss ();
        }
  })
  
  $('#four').on ('click', function(){
    currentScore = currentScore + num4;
    console.log("New userTotal= " + currentScore)
    $('#currentScore').text(currentScore);
        if (currentScore === randomNumber) {
           win ();
        } else if (currentScore > randomNumber) {
           loss ();
        }
  });

});