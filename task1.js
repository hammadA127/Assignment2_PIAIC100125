// Q1: Write a program to take “gender” as input from the user. 
//     If the user is male, give the message in the alert message Box.: “Good Morning Sir” , 
//     If the user is female, give the message in the alert message Box.: Good Morning Ma’am.

var gender=prompt("Please specify your gender Male/Female : ");
if(gender === "Male" || gender==="male" || gender==="MALE"){
    alert("Good Morning sir");
}else if(gender === "Female" || gender === "female" || gender==="FEMALE"){
    alert("Welcome Ma'am");
}else{
    alert("Invalid gender type");
}