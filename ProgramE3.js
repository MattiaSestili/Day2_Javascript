function display()
{
var outputString = "";

//display numbers from 1 to 5
for(var i = 1; i <= 50; i++)
    {
        outputString += i + "<br>";
        document.getElementById("demo").innerHTML = outputString;
    }
}

display();
