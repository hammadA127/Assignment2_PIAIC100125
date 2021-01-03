// Q4:Write a JavaScript program that accepts two integers and displays the larger. 
// Also show if the two integers are equal.

var firstNumber,secondNumber;
firstNumber = prompt("Enter first integer");
secondNumber = prompt("Enter second integer");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if(isNaN(firstNumber) && isNaN(secondNumber)){
    alert("Entered nunmbers are not integers.")
}
else{
    if(firstNumber == secondNumber){
        alert("both numbers are equal");
    }
    else if(firstNumber > secondNumber){
        alert(firstNumber +" is greater than "+secondNumber);
    }
    else{
        alert(secondNumber+" is greater than "+firstNumber);   
    }
}