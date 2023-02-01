var swiper = new Swiper(".testimonial_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 992px
    992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
    },
    // when window width is >= 576px
    576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
    }
}
});

let headerBurger = document.getElementById("header_burger");

headerBurger.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("menu-open");
});

// console.log("Hello World console!");
// alert("Hello World alert!");

const firstNumber = 4;
const secondNumber = 5;
const thirdNumber = '6';
const isTrue = true;
const isFalse = false;

const numbers = ['2','3','4'];
const numbersObj = {0: '2',1: '3', 2:'4'}

let total = 0;
// console.log(total);

total = firstNumber + thirdNumber + secondNumber;

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(thirdNumber);
// console.log(total);

let myVariable = 2;
let myVariableStr = "2";
let myVariable2 = 4;
let myVariableStr2 = "4";
let myBoolean = true;

// console.log(myVariable + myVariable2); //2 + 4 = 6
// console.log(myVariable + myVariableStr); // 2 + "2" = 22
// console.log(myVariableStr + myVariableStr2); // "2" + "4" = 24

// console.log(myVariable - myVariable2); //2 - 4 = -2
// console.log(myVariable - myVariableStr); // 2 - "2" = 0
// console.log(myVariableStr - myVariableStr2); // "2" - "4" = -2

// console.log(myVariable * myVariable2); //2 * 4 = 8
// console.log(myVariable * myVariableStr); // 2 * "2" = 4
// console.log(myVariableStr * myVariableStr2); // "2" * "4" = 8

// console.log(myVariable / myVariable2); //2 / 4 = 0.5
// console.log(myVariable / myVariableStr); // 2 / "2" = 1
// console.log(myVariableStr / myVariableStr2); // "2" / "4" = 0.5

// console.log(myVariable == myVariableStr); // 2 == "2" -> true
// console.log(myVariable === myVariableStr); // 2 === "2" -> false

// console.log(myVariable == 2)
// console.log(!(myVariable == 2))

// console.log(myBoolean);
// console.log(!myBoolean);

// console.log(myVariableStr != 2) // "2" != 2 -> false
// console.log(myVariableStr !== 2) // "2" !== 2 -> true

if(myVariableStr == 2) { // "2" == 2
    // console.log("myVariableStr is equal to 2");
} else {
    // console.log("myVariableStr is not equal to 2");
}

if(myVariableStr === 2) {
    // console.log("This is true", 4);
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// console.log( multiply(2, 3) )
// console.log( multiply(20, 30) )

// console.log(document.querySelector(".block_btn"));
// console.log(document.getElementById("logo"));
// console.log(document.getElementsByClassName("block_btn"));
// console.log('window',window)

let logo = document.getElementById("logo");

logo.addEventListener("mouseover", function() {
    // console.log("mouseover logo");
});

logo.addEventListener("mouseout", function() {
    // console.log("mouseout logo");
});

window.addEventListener("load", function() {
    // console.log("html loaded");
});

document.getElementById("newsletter_inp").addEventListener("change", function() {
    console.log("inp changed")
})

document.addEventListener("keydown", function() {
    console.log("key pressed");
});

let training = {numberOfSlides: "10", days: "30", name: "Front-end"}
let trainingStudents = [
    {name: "User 1", remoteDays: "10"},
    {name: "Name", surname: "Surname", email: "user@gmail.com"},
    {name: "User 4", remoteDays: "12"},
]

// console.log(training);

// console.log("Training name is: ",training.name)
// console.log("Training name is: ",training["name"])

// console.log('trainingStudents', trainingStudents)

// console.log(trainingStudents[1].name + " " + trainingStudents[1].surname)

let newsletterBtn = document.getElementById("newsletter_btn");
newsletterBtn.addEventListener("click", function() {
    this.innerHTML = "Form Submitted"
});

let mainBtn = document.getElementById("main_btn");
let mainImg = document.getElementsByClassName("main_img")[0];
function changeImage(imageSource) {
    mainImg.src = imageSource;
}
mainBtn.addEventListener("click", changeImage)
logo.addEventListener("click", changeImage)

let stringExample = "test ABCD EFGHIJKLM NOPQRSTUVWXYZ ABCD";
// console.log(stringExample.length)
// console.log(stringExample.slice(6, 14))
// console.log(stringExample.substring(6, 14))

// console.log(stringExample.indexOf("ABCD"))
// console.log(stringExample.lastIndexOf("ABCD"))


