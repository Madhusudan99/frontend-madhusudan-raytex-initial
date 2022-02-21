function printFib() {
    num = document.getElementById("readnum").value;
    console.log(fib(num))
}

function fib(num) {
    if (num <= 2) {
        return 1;
    }
    return fib(num-1) + fib(num-2);
}


function fibIttrative(num) {
    
}