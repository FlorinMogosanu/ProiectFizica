var btn1 = document.querySelector(".card1-btn");
var btn2 = document.querySelector(".card2-btn");
var btn3 = document.querySelector(".card3-btn");
var con1 = document.querySelector(".card1-con");
var con2 = document.querySelector(".card2-con");
var con3 = document.querySelector(".card3-con");
var cur = 1;

btn1.addEventListener('click', function() {
    if(cur === 2) {
        con2.classList.add("deactive");
        con1.classList.add("activ");
        con2.classList.remove("activ");
        con1.classList.remove("deactive");
    }
    if(cur === 3) {
        con3.classList.add("deactive");
        con1.classList.add("activ");
        con3.classList.remove("activ");
        con1.classList.remove("deactive");
    }
    
    cur = 1;
});

btn2.addEventListener('click', function() {
    if(cur === 1) {
        con1.classList.add("deactive");
        con2.classList.add("activ");
        con1.classList.remove("activ");
        con2.classList.remove("deactive");
    }
    if(cur === 3) {
        con3.classList.add("deactive");
        con2.classList.add("activ");
        con3.classList.remove("activ");
        con2.classList.remove("deactive");
    }

    cur = 2;
});

btn3.addEventListener('click', function() {
    if(cur === 1) {
        con1.classList.add("deactive");
        con3.classList.add("activ");
        con1.classList.remove("activ");
        con3.classList.remove("deactive");
    }
    if(cur === 2) {
        con2.classList.add("deactive");
        con3.classList.add("activ");
        con2.classList.remove("activ");
        con3.classList.remove("deactive");
    }

    cur = 3;
});