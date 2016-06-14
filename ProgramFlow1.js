//Declare variable for listening button1
var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click',showAlert,false);

function showAlert()
{
    //get the value from the text box and save it to local variable
    var userinput1 = parseInt(document.getElementById("input1").value);
    
    window.alert(userinput1);
}



//declare the output variable
var outputString = "";

//display numbers from 1 to 5
for(var i = 1; i <= 5; i++)
    {
        outputString += i + "<br>";
        document.getElementById("result").innerHTML = outputString;
    }

//declare variable needed for loop
var i = 0;
var iPlusOne = 0;
var output = "";

//display the number from 1 to 5 on screen

do
    {
        iPlusOne = i + 1;
        output += iPlusOne + "<br>";
        i++
    }
while(i < 5)
    
document.getElementById("result").innerHTML = output;