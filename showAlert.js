//Declare variable for listening button1
var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click',showAlert,false);

function showAlert()
{
    //get the value from the text box and save it to local variable
    var userinput1 = document.getElementById("input1").value;
    
    window.alert(userinput1);
}