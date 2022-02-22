function submit() {
    email = document.getElementById("exampleInputEmail1").value;
    password = document.getElementById("exampleInputPassword1").value;

    document.getElementById("emailEntered").innerHTML = email;
    document.getElementById("emailPassword").innerHTML = password;

    console.log(email);
    console.log(password);
}

