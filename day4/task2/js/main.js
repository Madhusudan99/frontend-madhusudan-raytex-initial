function validate() {
    errors  = [];
    username = document.getElementById("validationCustomUsername").value;
    // console.log(username);
    if (username.length < 5) {
        errors.push("Username should be more than 5 characters");
        document.getElementById("userError").innerHTML = "Username should be more than 5 characters";
    }

    if (username.length > 10) {
        errors.push("Username should be less than 10 characters");
    }

    email = document.getElementById("exampleInputEmail1").value;
    
    if (!email.includes("@")) {
        errors.push("Enter Valid Email Id");
    }

    phone = document.getElementById("validationCustom05").value;

    if (!(phone.length == 10 && isNaN(phone))) {
        errors.push("Enter Valid Phone Number");
    }
    

    console.log(errors);
    errorStr  = ""
    for (let i=0; i<errors.length;i++) {
        errorStr = errorStr + "<div>" + errors[i] + "</div>" ;
    }
    console.log(errorStr);
    document.getElementById("notification").style.display  = "block";
    document.getElementById("notification").innerHTML = errorStr;
    
    check = document.getElementById("invalidCheck");

    console.log(check.checked);

}