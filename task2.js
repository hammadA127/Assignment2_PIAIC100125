// Q2: Write a program to take input on the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

var percentile = prompt("Obtianed percentage : ");
if(percentile >100 || percentile<0){
    alert("Invalid input")
} else{
    if(percentile >= 80){
        alert("Grade : A-one \nRemarks : Excellent");
    }else if(percentile >= 70){
        alert("Grade : A \nRemarks : Good");
    }else if(percentile >=60){
        alert("Grade : B \nRemarks : You need to improve");
    }else if(percentile < 60){
        alert("Grade : Fail \nRemarks : Sorry")
    }
}
