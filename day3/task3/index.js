function printFib() {
    num = document.getElementById("readnum").value;
    console.log(fibIttrative(num))
}

function fib(num) {
    if (num <= 2) {
        return 1;
    }
    return fib(num-1) + fib(num-2);
}


function fibIttrative(num) {
    let arr = [1, 1];
    // if (num <= arr.length) return arr[num-1]

    for(let i=2; i<num; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    // console.log(arr);
    return arr;
}