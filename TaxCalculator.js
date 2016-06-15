var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click', calculate, false);

function calculate()
{
    var loanToBorrowPerYear = parseInt(document.getElementById("input1").value);
    var interestRate = parseInt(document.getElementById("input2").value);
    var lenghtLoan = parseInt(document.getElementById("input3").value);
    
    var yearInterest = loanToBorrowPerYear * (interestRate /100);
    var interestPerMonth =parseFloat(yearInterest / 12).toFixed(2);
    document.getElementById("monthInterest").innerHTML = interestPerMonth;
    
    var totalInterestForLenghtLoan = yearInterest * lenghtLoan;
    document.getElementById("interestPaid").innerHTML = totalInterestForLenghtLoan;
}
