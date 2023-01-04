// ************************** Slider *******************************
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}




var aslideIndex = 1;
ashowSlides(aslideIndex);

function plusSlides(n) {
    ashowSlides(aslideIndex += n);
}

function currentSlide(n) {
    ashowSlides(aslideIndex = n);
}

function ashowSlides(n) {
    var j;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { aslideIndex = 1 }
    if (n < 1) { aslideIndex = slides.length }
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[aslideIndex - 1].style.display = "block";
}



// *****************************************************************


// ********************** show & hide ***************************
var Phones = document.querySelectorAll(".phone-product");

function showPhones() {
    for (let i = 0; i < Phones.length; i++) {
        Phones[i].style.display = "inline-block";
    }
}

function hidePhones() {
    for (let i = 0; i < Phones.length; i++) {
        Phones[i].style.display = "none";
    }
}
var isPhoneShowned = false;
function ShowHidePhones() {
    if (isPhoneShowned) {
        hidePhones();
        isPhoneShowned = false;
    }
    else {
        showPhones();
        isPhoneShowned = true;
    }
}

var Labs = document.querySelectorAll(".lab-product");

function showLabs() {
    for (let i = 0; i < Labs.length; i++) {
        Labs[i].style.display = "inline-block";
    }
}

function hideLabs() {
    for (let i = 0; i < Labs.length; i++) {
        Labs[i].style.display = "none";
    }
}
var isLabShowned = false;
function ShowHideLabs() {
    if (isLabShowned) {
        hideLabs();
        isLabShowned = false;
    }
    else {
        showLabs();
        isLabShowned = true;
    }
}

var Makeups = document.querySelectorAll(".Makeup-product");

function showMakeups() {
    for (let i = 0; i < Makeups.length; i++) {
        Makeups[i].style.display = "inline-block";
    }
}

function hideMakeups() {
    for (let i = 0; i < Makeups.length; i++) {
        Makeups[i].style.display = "none";
    }
}
var isMakeupShowned = false;
function ShowHideMakeups() {
    if (isMakeupShowned) {
        hideMakeups();
        isMakeupShowned = false;
    }
    else {
        showMakeups();
        isMakeupShowned = true;
    }
}

var cars = document.querySelectorAll(".car-product");

function showCars() {
    for (let i = 0; i < cars.length; i++) {
        cars[i].style.display = "inline-block";
    }
}

function hideCars() {
    for (let i = 0; i < cars.length; i++) {
        cars[i].style.display = "none";
    }
}
var isCarShowned = false;
function ShowHideCars() {
    if (isCarShowned) {
        hideCars();
        isCarShowned = false;
    }
    else {
        showCars();
        isCarShowned = true;
    }
}

function showAll() {
    showPhones();
    showLabs();
    showMakeups();
    showCars();
}

function hideAll() {
    hidePhones();
    hideLabs();
    hideMakeups();
    hideCars();
}
var isAllShowned = true;
function ShowHideAll() {
    if (isAllShowned) {
        hideAll();
        isAllShowned = false;
    }
    else {
        showAll();
        isAllShowned = true;
    }
}
// *****************************************************************




// **************** add2Cart ***************************************

var num = 1;

function add2Cart() {

    document.getElementById("count").innerText = num;
    num++;
}









var Phone1 = document.querySelector(".add1");

function hidePhone1() {

    Phone1.style.display = "none";

}

function addPhone1() {
    add2Cart();
    hidePhone1();
}


var Car1 = document.querySelector(".add2");

function hideCar1() {

    Car1.style.display = "none";

}

function addCar1() {
    add2Cart();
    hideCar1();
}


var Phone2 = document.querySelector(".add3");

function hidePhone2() {

    Phone2.style.display = "none";

}

function addPhone2() {
    add2Cart();
    hidePhone2();
}


var Car2 = document.querySelector(".add4");

function hideCar2() {

    Car2.style.display = "none";

}

function addCar2() {
    add2Cart();
    hideCar2();
}


var Lab1 = document.querySelector(".add5");

function hideLab1() {

    Lab1.style.display = "none";

}

function addLab1() {
    add2Cart();
    hideLab1();
}


var Car3 = document.querySelector(".add6");

function hideCar3() {

    Car3.style.display = "none";

}

function addCar3() {
    add2Cart();
    hideCar3();
}


var Makeup1 = document.querySelector(".add7");

function hideMakeup1() {

    Makeup1.style.display = "none";

}

function addMakeup1() {
    add2Cart();
    hideMakeup1();
}


var Lab2 = document.querySelector(".add8");

function hideLab2() {

    Lab2.style.display = "none";

}

function addLab2() {
    add2Cart();
    hideLab2();
}


var Makeup2 = document.querySelector(".add9");

function hideMakeup2() {

    Makeup2.style.display = "none";

}

function addMakeup2() {
    add2Cart();
    hideMakeup2();
}



// *************************************************************