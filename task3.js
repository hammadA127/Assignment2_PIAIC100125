// Q3:Write a program that takes temperature as input and shows a message based on following criteria:
// . T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.”
//  c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

var temprature = prompt("Temprature : ");
if(temprature>=40){
    alert("It is too hot outside.");
}else if(temprature>=30){
    alert("The weather today is Normal.");
}else if(temprature>=20){
    alert("Today's weather is cool.");
}else if(temprature>=10){
    alert("OMG! Today's weather is so cool");
}else if (temprature<10){
    alert("OMG! Today's weather is so cool");
}