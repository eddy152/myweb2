//array3.js

let numbers = [34, 55, 22, 10, 100, 6, 7];

numbers.sort(function(a, b){
    return a-b;
});

// console.log(numbers);
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function(a, b, c){
    sum += a;
    console.log(a, b, c);
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
});

let liTag = document.createElement('li');
    liTag.innerHTML = '합계: '+sum;
    ulTag.append(liTag);