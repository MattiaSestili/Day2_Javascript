//Declare variable for listening button1
var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click', guessNumber, false);

var numberGuesses = 0;

function numberGuess()
{
    var numberToGuess = Math.floor(Math.random()*10)+1;
    return numberToGuess;
}

function guessNumber()
{
    var userinput = parseInt(document.getElementById("input1").value);
    var numberToGuess = numberGuess();
        
        if (userinput > numberToGuess)
        {

            document.getElementById("demo").innerHTML = "Too high";
            document.getElementById("demo2").innerHTML = "The correct number was " + numberToGuess;
            countGuesses();
        }
        else if(userinput < numberToGuess)
        {
            document.getElementById("demo").innerHTML = "Too low";
            document.getElementById("demo2").innerHTML = "The correct number was " + numberToGuess;
            countGuesses();
        }
        else 
        {

            document.getElementById("demo").innerHTML = "Well Done";
            document.getElementById("demo2").innerHTML = "The correct number was " + numberToGuess;
            countGuesses();
        }
}
    

function countGuesses()
    {
        numberGuesses++;
        document.getElementById("demo3").innerHTML = "You made " + numberGuesses + " guesses";
    }

