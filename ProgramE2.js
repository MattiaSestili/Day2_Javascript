//Declare variable for listening button1
var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click',showAlert,false);

function showAlert()
{    
    //get the values from the text box and save it to local variable
    var userinput1 = parseInt(document.getElementById("input1").value);
    var userinput2 = parseInt(document.getElementById("input2").value);
    var userinput3 = parseInt(document.getElementById("input3").value);
    sum(userinput1, userinput2, userinput3);
}

function sum(num1, num2 , num3)
{
    //put onto the variable calculation the sum of the 3 parameters passed into the function
    var calculation = num1 + num2 + num3;
    
    document.getElementById("demo").innerHTML = calculation;
}