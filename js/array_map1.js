let students = [];
let student = {
    sno: 1,
    sname: 'Hong',
    sgen: 'F',
    score: 80
};
for (let i = 1; i <= 5; i++) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
};
console.log(students)

let fstu = students.filter(function (a, b, c) {
    return a.sgen == 'F';
}).map(function (a, b, c) {
    return a.sname;
});;
console.log(fstu);
console.clear();

let result = students.map(function (a, b, c) {
    console.log(a, b, c);
    return a.score;
}).reduce(function (a, b, c, d) {
    console.log(a, b, c, d);
    return a + b;
});

console.log('result: ', result);
console.clear();

let sfs = students.some(function (a, b, c) {
    console.log(a, b)
    return a.score > 80;
});
console.log(sfs);

sfs = students.map(function (a) {
    return a.sname;
}).indexOf('Hong3');

console.log(sfs);
