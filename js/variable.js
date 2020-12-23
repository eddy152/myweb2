let something = '30';
// something = 1 < 2;


if (something) {
    document.write("참입니다.")
} else {
    document.write("거짓입니다.")
}
document.write('</p>')

something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222'
}
for (filed in something) {
    document.write(filed + ' : ' + something[filed] + '</p>');
}

let nameAry = ['Hong', 'Park', 'Kim'];
for (nA in nameAry) {
    document.write(nameAry[nA] + '</p>');
}

nameAry[2] = "Choi";

for (let i = 0; i < 3; i++) {
    document.write('NameAry ' + i + '번째 값 : ' + nameAry[i] + '</p>');
}

document.write('<table border="1">');
for (str of nameAry) {
    document.write('<tr><td>' + str + '</td></tr>');
}
document.write('</table>' + '</p>');

document.write('<table border="1">');
document.write('<tr><td>순번</td><td>이름</td></tr>')
for (let i = 0; i < 3; i ++) {
    document.write('<tr><td>' + (i+1) + '</td><td>' + nameAry[i] + '</td></tr>');
}
document.write('</table>' + '</p>');