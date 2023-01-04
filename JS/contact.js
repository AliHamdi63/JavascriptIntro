var fName = document.getElementById("fname");
var spanName = document.querySelector(".error-name");
var spanName2 = document.querySelector(".error-name2");

var email = document.getElementById("mail");
var spanEmail = document.querySelector(".error-mail");

var password = document.getElementById("pass");
var spanPass = document.querySelector(".error-pass");

var nflag = false;
var eflag = false;
var pflag = false;

const nameRegex = /^[a-zA-Z]{3,}$/gm;

fName.addEventListener("keyup", function (event) {
    if (event.target.value.length <= 0) {
        fName.style.border = "2px solid red";
        spanName.style.display = "block";
        nflag = false;
        return nflag;
    } else {
        if (!event.target.value.search(nameRegex)) {
            fName.style.border = "2px solid green";
            spanName.style.display = "none";
            spanName2.style.display = "none"
            nflag = true;
            return nflag;

        } else {
            fName.style.border = "2px solid red";
            spanName2.style.display = "block";
            nflag = false;
            return nflag;
        }
    }
});

const emailRegex = /([a-z]|[0-9]|[A-Z])+@+([0-9]|[a-z]|[A-Z])+.com/g;

email.addEventListener("keyup", function (event) {
    if (event.target.value.length <= 0) {
        email.style.border = "2px solid red";
        spanEmail.style.display = "block";
        eflag = false;
        return eflag;
    } else {
        if (!event.target.value.search(emailRegex)) {
            email.style.border = "2px solid green";
            spanEmail.style.display = "none";
            eflag = true;
            return eflag;
        } else {
            email.style.border = "2px solid red";
            spanEmail.style.display = "block";
            eflag = false;
            return eflag;
        }
    }
});


password.addEventListener("keyup", function (event) {
    if (event.target.value.length < 8) {
        password.style.border = "2px solid red";
        spanPass.style.display = "block";
        pflag = false;
        return pflag;
    } else {
        password.style.border = "2px solid green";
        spanPass.style.display = "none";
        pflag = true;
        return pflag;
    }
});


function clearResult() {

    fName.value = "";
    email.value = "";
    password.value = "";
}



function check() {
    if (nflag && eflag && pflag) {
        alert("Data is valid.");
        clearResult();
    } else {
        alert("Data is not valid, please try again.");
        clearResult();

    }
}