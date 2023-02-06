// let firstNum = document.getElementById("first_num");
// let secondNum = document.getElementById("second_num");
// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multi = document.getElementById("multi");
// let divide = document.getElementById("divide");

// firstNum.addEventListener('change', function() {
//     console.log(firstNum.value)
// })
// secondNum.addEventListener('change', function() {
//     console.log(secondNum.value)
// })

// plus.addEventListener('click', function() {
//     console.log(Number(firstNum.value) + Number(secondNum.value))
// })
// minus.addEventListener('click', function() {
//     console.log(firstNum.value - secondNum.value)
// })
// multi.addEventListener('click', function() {
//     console.log(firstNum.value * secondNum.value)
// })
// divide.addEventListener('click', function() {
//     console.log(firstNum.value / secondNum.value)
// })

function calculate(event) {
    let firstNum = Number(document.getElementById("first_num").value);
    let secondNum = Number(document.getElementById("second_num").value);
    let result;

    if(event.value === "+") {
        result = firstNum + secondNum;
    } else if(event.value === "-") {
        result = firstNum - secondNum;
    } else if(event.value === "*") {
        result = firstNum * secondNum;
    } else {
        result = firstNum / secondNum;
    }

    document.getElementById("result").innerHTML = "Result is: " + result;
}