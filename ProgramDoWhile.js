function display()
{
    var i = 0;
    var iPlusOne = 0;
    var output = "";
    
    do
    {
        iPlusOne = i + 1;
        output += iPlusOne + "<br>";
        i++;
    }
    while(i < 10);
    
   document.getElementById("demo").innerHTML = output;
   document.getElementById("demo").innerHTML = output;
}

function nestedLoop()
{
    var outerLoop = "";
    
    for (var i = 1; i <= 5; i++) 
    {
        outerLoop += "<br>" + "The outer Loop is " + i;
        
        for (var j = 1; j <= 5; j++) 
        {
            outerLoop += "<br>" + "The inner loop is " + j;
            document.getElementById("demo").innerHTML = outerLoop;
        }
        
    }
}

nestedLoop();