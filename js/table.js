//js.js
var tableTag = document.getElementById('tbl');

// tr1
var trTag1 = document.createElement('tr');
trTag1.setAttribute('class', 'title');
var tdTag1 = document.createElement('td');
tdTag1.innerHTML = 'Name'
var tdTag2 = document.createElement('td');
tdTag2.innerHTML = 'Age'
trTag1.append(tdTag1);
trTag1.append(tdTag2);

// tr2
var trTag2 = document.createElement('tr');
trTag2.setAttribute('class', 'content');
var tdTag3 = document.createElement('td');
tdTag3.innerHTML = 'Hong'
var tdTag4 = document.createElement('td');
tdTag4.innerHTML = '15'
trTag2.append(tdTag3);
trTag2.append(tdTag4);

console.log(trTag1);
console.log(trTag2);

tableTag.append(trTag1);
tableTag.append(trTag2);