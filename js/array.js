let friend1 = {
    name: '송다희',
    age: 20,
    hobby: '오라클',
    grade: 'A'
}
let friend2 = {
    name: '이나경',
    age: 22,
    hobby: '자바',
    grade: 'B'
}
let friend3 = {
    name: '이혜빈',
    age: 25,
    hobby: '자바스크립트',
    grade: 'C'
}
let friends = [friend1, friend2, friend3];

// 세로로 이름 나이 취미 출력(새로운 항목 추가시 자동 추가 x)
document.write('<table border="1">');
document.write('<tr align="center"><td class="even">이름</td>');
for (fr of friends) {
    document.write('<td>' + fr.name + '</td>');
}
document.write('</tr><tr align="center"><td class="even">나이</td>');
for (fr of friends) {
    document.write('<td>' + fr.age + '</td>');
}
document.write('</tr><tr align="center"><td class="even">취미</td>');
for (fr of friends) {
    document.write('<td>' + fr.hobby + '</td>');
}
document.write('</tr></table></p>');

// 가로로 이름 나이 취미 출력(새로운 항목을 추가해도 자동으로 추가)
document.write('<table border="1"><tr>');
for (fr in friend1) {
    document.write('<th style="background-color: hotpink;">' + fr + '</th>');
}
document.write('</tr>');
for (fr of friends) {
    document.write('<tr align="center">');
    for (field in fr) {
        document.write('<td>' + fr[field] + '</td>')
    }
}
document.write('</tr></table>')








// let numbers = [3, 4, 5, 6, 8, 12, 9, 213, 51, 24, 65, 123, 124, 6];
// let sum = 0;
// for (num of numbers) {
//     if (sum < num) {
//         document.write(num + '<br>');
//         sum = num;
//     } else {
//         document.write(num + '<br>')
//     }
// }
// document.write('가장 큰 수 : <b>' + sum + '</b>');
