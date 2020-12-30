fruits = [];
function sum(){
    let num1 = document.getElementById('num1').value;
    console.log(num1);
    fruits.push(num1);
    console.log(fruits);
}
function Minus(){
    fruits.pop();
    let num1 = document.getElementById('num1').value;
    console.log(num1);
    console.log(fruits);
}