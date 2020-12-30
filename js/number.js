// number.js
let x = 10;
let y = '5';

// let result = x+ parseFloat(y);
// console.log("첫번째 값: "+result)
// result = x / 0;
// console.log("나누기 값: "+result)
let result = x * y ;
 console.log("곱셈 값: "+result)
function sum(){
    let num1 = document.getElementById('num1').value;
    console.log(num1);
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1)+parseInt(num2));
}