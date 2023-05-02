// Find greatest of three numbers

var num1 = prompt("Enter the number 1 :");
var num2 = prompt("Enter the number 2 :");
var num3 = prompt("Enter the number 3 :");
var temp;
if (num1 > num2){
    if (num1 > num3){
        console.log(num1 + " is the greatest!")
        temp = num1 + " is the greatest!"
    }
    else{
        console.log(num3 + " is the greatest!")
        temp = num3 + " is the greatest!"
    }
}
if (num2 > num3){
    if (num2 > num1){
        console.log(num2 + " is the greatest!")
        temp = num2 + " is the greatest!"
    }
    else{
        console.log(num1 + " is the greatest!")
        temp = num1 + " is the greatest!"
    }
}
if (num3 > num1){
    if (num3 > num2){
        console.log(num3 + " is the greatest!")
        temp = num3 + " is the greatest!"
    }
    else{
        console.log(num2 + " is the greatest!")
        temp = num2 + " is the greatest!"
    }
}

document.getElementById("demo").innerHTML = temp;

