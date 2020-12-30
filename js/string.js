let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;


// indexOf, lastIndexOf, serach

strLeng = str.indexOf('locate', 13);
str.lastIndexOf('locate');


console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

// slice, substring, substr
let fruit = 'Apple, Banana, kiwi';
console.log(fruit.slice(0, 5));

let from = fruit.indexOf('Banana');
result = fruit.substring(from, from + 6);
console.log(result);

// replace
let newFruit = fruit.replace('Banana', 'Orange');
// console.clear();
console.log(newFruit);

// toUpperCase, toLowerCase, concate, trim, padStart, padEnd
console.log('    good     hello        '.trim().toUpperCase());
console.log('5'.padStart(4, '나'));

let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

let fruits = fruit.split(','); //Apple, Banana, kiwi
for (f of fruits) {
    console.log(f.trim());
}

// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890

// 2000년 이전과 이후를 구분해서 1,3이면 남자, 2,4이면 여자
console.clear();
function getGender(num) {
    console.log('앞 두자리 숫자 : ' + num.slice(0, 2));
    console.log('뒷 첫 숫자 : ' + num.replace('-', '').slice(6, 7));

    let lNum = num.replace('-', '').slice(6, 7);
    let fNum = num.slice(0, 2);

    if ( fNum >= 00 && fNum <= 20) {
        console.log('2000년 이후 출생')
    } else {
        console.log('2000년 이전 출생')
    }

    if (lNum == 1 || lNum == 3) {
        console.log('남자');
    } else if (lNum == 2 || lNum == 4) {
        console.log('여자');
    } else {
        console.log('잘못된 값입니다');
    }
}

let numbers = '990101-1234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0302025678900';
numbers += ' 1202014564561';

let numAry = numbers.split(' ');
for (num of numAry) {
    getGender(num);
}