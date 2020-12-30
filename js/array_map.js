let person = {};
person.name = 'Hong';
person.age = 10;
console.log(person);

person = {
    name: 'Hwang',
    age: 15
};
console.log(person);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
person = new Person('Park', 20);

console.log(person);

let persons = [];

persons.push(person);
persons.push(new Person('Choi', 21));
persons.push(new Person('Hong', 22));
persons.push(new Person('Hwang', 23));

let names = persons.map(function (a, b, c) {
    let member = {};
    member.id = a.name + '-' + b;
    member.age = a.age;
    return member;
});

let over21 = persons.filter(function (a, b, c) {
    return a.age > 21;
}).map(function (a, b, c) {
    return a.age;
});
console.log(over21);

names.forEach(function (a, b, c) {
    document.write('<h1>' + a.id + '/' + a.age + '</h1>')
});

console.log(names);