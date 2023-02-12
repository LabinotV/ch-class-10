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

console.log("Hello World console");
alert("Hello World");

let firstNumber = 4;
const secondNumber = 5;

let total = 0;
total = firstNumber + secondNumber;

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

let myVariable = 2
let myVariableStr = "2"
let myVariable2 = 4
let myVariableStr2 = "4"

console.log (myVariable + myVariable2)  //6
console.log (myVariable + myVariableStr) // 22


