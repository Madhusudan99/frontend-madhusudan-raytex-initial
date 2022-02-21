function printFib() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(username);
    console.log(password);
    if(username == "madhusudan" && password=="password")  {
        document.getElementById("status").innerHTML = "Sucess!!";
    }
}