function validateForm() {
    let a = document.forms["myForm"]["first_name"].value;
    let b = document.forms["myForm"]["last_name"].value;
    let c = document.forms["myForm"]["email"].value;
    let d = document.forms["myForm"]["password"].value;
    let e = document.forms["myForm"]["password_confirmation"].value;

    if (a == "") {
        alert("First name must be filled out");
        return false;
    }
    else if (b == "") {
        alert("Last name must be filled out");
        return false;
    }
    else if (c == "") {
        alert("Email must be filled out");
        return false;
    } else if (d == "") {
        alert("Password must be filled out");
        return false;
    } else if (e == "") {
        alert("Confirm password field must be filled out");
        return false;
    }

    if (d != e) {
        alert("Your passwords does NOT match");
        return false;
    } else if (d.length < 6) {
        alert("Your password needs to be ATLEAST 6 letters long");
        return false;
    } else {
        alert("You've succefully signed up!");
    }
}

function validateLogin() {
    let username = document.forms["myLoginForm"]["email"].value;
    let password = document.forms["myLoginForm"]["password"].value;

    if (username == "") {
        alert("Your email must be filled out");
        return false;
    }
    else if (password == "") {
        alert("Your password must be filled out");
        return false;
    } else {
        alert("You've succefully logged in!");
    }
}