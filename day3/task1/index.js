

function checkeven() {
    const num = document.getElementById("readnum").value;
    if (num % 2 == 0)  {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

function checkprime() {
    const num = document.getElementById("readnum").value;
    let isPrime = true;
    for (let i = 2; i < num; i++)
    {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log("Prime");
    }
    else {
        console.log("Not Prime");
    }
}

