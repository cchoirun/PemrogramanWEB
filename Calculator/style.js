const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const result = document.querySelector('.result');

const plus = document.getElementById('plus');
const min = document.getElementById('min');
const cross = document.getElementById('cross');
const divide = document.getElementById('divide');

let num1, num2;

number1.addEventListener('input', function() {
num1 = parseInt(number1.value);
});

number2.addEventListener('input', function() {
num2 = parseInt(number2.value);
});

plus.addEventListener('click', function() {
    console.log(num1+num2);
    result.innerHTML = num1+num2;
});

min.addEventListener('click', function() {
    console.log(num1-num2);
    result.innerHTML = num1-num2;

});

cross.addEventListener('click', function() {
    console.log(num1*num2);
    result.innerHTML = num1*num2;

});

divide.addEventListener('click', function() {
    console.log(num1/num2);
    result.innerHTML = num1/num2;

});