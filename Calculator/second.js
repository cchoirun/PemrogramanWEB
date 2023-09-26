const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const cross = document.querySelector('.cross');
const divide = document.querySelector('.divide');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const screen = document.querySelector('.screen');

let num1 = 0 , tmp1, opr;


// Number
one.addEventListener("click", function() {
    if(num1 == 0) num1 = 1;
    else num1 += '1';
    screen.innerHTML = num1;
});
two.addEventListener("click", function() {
    if(num1 == 0) num1 = 2;
    else num1 += '2';
    screen.innerHTML = num1;

});
three.addEventListener("click", function() {
    if(num1 == 0) num1 = 3;
    else num1 += '3';
    screen.innerHTML = num1;
});
four.addEventListener("click", function() {
    if(num1 == 0) num1 = 4;
    else num1 += '4';
    screen.innerHTML = num1;
});
five.addEventListener("click", function() {
    if(num1 == 0) num1 = 5;
    else num1 += '5';
    screen.innerHTML = num1;
});
six.addEventListener("click", function() {
    if(num1 == 0) num1 = 6;
    else num1 += '6';
    screen.innerHTML = num1;
});
seven.addEventListener("click", function() {
    if(num1 == 0) num1 = 7;
    else num1 += '7';
    screen.innerHTML = num1;
});
eight.addEventListener("click", function() {
    if(num1 == 0) num1 = 8;
    else num1 += '8';
    screen.innerHTML = num1;
});
nine.addEventListener("click", function() {
    if(num1 == 0) num1 = 9;
    else num1 += '9';
    screen.innerHTML = num1;
});
zero.addEventListener("click", function() {
    if(num1 == 0) num1 = 0;
    else num1 += '0';
    screen.innerHTML = num1;
});
dot.addEventListener("click", function() {
    if(num1 == 0) num1 = '0.';
    else num1 += '.';
    screen.innerHTML = num1;
});

// Operator
plus.addEventListener("click", function() {
    tmp1 = parseFloat(num1); num1 = 0;
    opr = 'plus';
    screen.innerHTML = '+';
});
minus.addEventListener("click", function() {
    tmp1 = parseFloat(num1);
    num1 = 0;
    opr = 'minus';
    screen.innerHTML = '-';
});
cross.addEventListener("click", function() {
    tmp1 = parseFloat(num1);
    num1 = 0;
    opr = 'cross';
    screen.innerHTML = '*';
});
divide.addEventListener("click", function() {
    tmp1 = parseFloat(num1);
    num1 = 0;
    opr = 'divide';
    screen.innerHTML = '/';
});

equal.addEventListener("click", function() {
    // screen.classList.toggle('screen-result');
    if (opr == 'plus') screen.innerHTML = tmp1 + parseFloat(num1);
    else if (opr == 'minus') screen.innerHTML = tmp1 - parseFloat(num1);
    else if (opr == 'cross') screen.innerHTML = tmp1 * parseFloat(num1);
    else if (opr == 'divide') screen.innerHTML = tmp1 / parseFloat(num1);
    num1 = 0;
    num2 = 0;
});

