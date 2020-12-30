//array_foreach.js

let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

persons.forEach(myCallBack);

function myCallBack(a, b, c){
    // console.log(a,b,c);
}

persons = [];
let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons.push(person1);

// persons.push('송다희');
let tabTag = document.createElement('table');
tabTag.setAttribute('border', '1');

console.log(persons);
function drawTable(){
    let titles = ['이름', '나이', '점수'];

    //테이블 , row, column => persons의 배열요소 만들기

    let trTag = document.createElement('tr');
    for(title of titles){
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML= title;   
        trTag.append(tdTag1);   
    }

    tabTag.append(trTag);    // 타이틀 생성

    persons.forEach(myCallFunc); // 데이터 생성.

    document.getElementById('show').append(tabTag);
}


function myCallFunc(item, idx, ary){
    let trTag = document.createElement('tr');
    for(field in item){
        let tdTag1 = document.createElement('td');
        tdTag1.innerHTML= item[field]   ;
        trTag.append(tdTag1);   
}
        tabTag.append(trTag);

}

