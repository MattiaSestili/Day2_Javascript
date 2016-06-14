var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click',getDateAndTime,false);

var today = new Date();

function getDateAndTime()
{
    var day = "";

    switch (today.getDay()) 
    {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        default:
            break;
    }
    
    var time = timeAndDate();
    document.getElementById("demo").innerHTML= "Today is " + day + " and the time is " + time;
}

function timeAndDate()
{
    var minutes = today.getMinutes();
    var hours = today.getHours();
    var filler = "";
    
    //A if statement for rendering the number 0 before the minutes less than 10
    if (minutes < 10)
    {
        filler = 0;
    }

    var time = hours + ":" + filler + minutes;
    return time;
}