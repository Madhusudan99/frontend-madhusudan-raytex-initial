var name = "James";
var numberone = 1;
var verify = true;

var numbertwo = 2;

const student = {name: "James", Age:30};


function displayobjectnew(){
    document.getElementById("valobject").innerHTML = student.name + " " + student.Age;

}

function checkeven() {
    const num = document.getElementById("readnum").value;
    if (num % 2 == 0)  {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}


function addition() {
    var sum = numberone + numbertwo;
var mul = numberone * numbertwo;


document.getElementById("newone").innerHTML = "Aurther";
document.getElementById("sum").innerHTML = sum;
document.getElementById("mul").innerHTML = mul;
console.log(sum);
console.log(mul);
return sum;
}