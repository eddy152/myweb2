// function nameFunc() {
//     let name1 = document.getElementById('name1').value;
//     console.log('입력한 이름은 : ' + name1);
// }

// nameFunc();

// let num1 = window.prompt('숫자를 입력하세요.');

// checkGrade(num1);

// function checkGrade(a) {
//     let n1 = parseInt(a);
//     if (n1 >= 90) {
//         console.log('점수 : ' + n1 + ', A등급 입니다.')
//     } else if (n1 >= 80) {
//         console.log('점수 : ' + n1 + ', B등급 입니다.')
//     } else if (n1 >= 70) {
//         console.log('점수 : ' + n1 + ', C등급 입니다.')
//     } else {
//         console.log('점수 : ' + n1 + ', D등급 입니다.')
//     }
// }


// let nu2 = window.prompt('num1를 입력하세요.');
// let num2 = window.prompt('num2를 입력하세요.');
// diffSum(nu2, num2);
// function diffSum(a, b) {
//     let a1 = parseInt(a);
//     let b2 = parseInt(b);
//     if (a1 + b2 >= 15 && a1 + b2 <= 25) { 
//         console.log('15 ~ 25 사이입니다 : ' + (a1+b2));
//     } else {
//         console.log('범위 밖 : ' + (a1+b2));
//     }
// }

// sum(num1,num2);

// function sum(a,b) {
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);
//     console.log(n1+n2);
// }

// let numAry = [];
// let hN = 0;
// for (let i = 0; i < 5; i++) {
//     let num = window.prompt('숫자를 입력하세요.' + (i+1) + '번째');
//     numAry[i] = parseInt(num);
//     console.log(numAry + ', hN : ' + hN);
//     if( hN < numAry[i] ){
//         hN = numAry[i];
//     }
// }
// console.log('최대값 : ' + hN);

// let nu2 = window.prompt('num1를 입력하세요.');
// let num2 = window.prompt('num2를 입력하세요.');
// diffSum(nu2, num2);
// function diffSum(a, b) {
//     let sum = 0;
//     let a1 = parseInt(a);
//     let b2 = parseInt(b);
//     while (a1 < b2) {
//         sum += a1;
//         console.log(a1);
//         a1++;
//     }
//     console.log('a부터 b까지의 합 : ' + sum);
// }

// let friend1 = {};
// friend1.name = 'Hong';
// friend1.age = 21;
// friend1.hobby = 'Youtube';

// let friend2 = {
//     name: 'Hwang',
//     age: 30,
//     hobby: 'LOL'
// }

// let friend3 = {};
// friend3.name = window.prompt('이름을 입력하세요.');
// friend3.age = window.prompt('나이를 입력하세요.');
// friend3.hobby = window.prompt('취미를 입력하세요.');

// let friends = [friend1, friend2, friend3];

friends = [];
for (let i = 0; i <3; i++) {
    let nameIn = window.prompt('이름을 입력하세요.');
    let ageIn = +window.prompt('나이를 입력하세요.');
    let friend = {};
    friend.name = nameIn;
    friend.age = ageIn;
    friends[i] = friend;
}

document.write('<table border="1"><tr>')
for (fr in friends[0]) {
    document.write('<th>' + fr + '</th>')
}
for (friend of friends) {
    document.write('<tr>')
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>')
    }
    document.write('</tr>')
}

