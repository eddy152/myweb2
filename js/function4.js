function input_friend() {
    let fruit = document.getElementById('fruit');
    let liTag = document.createElement('li')
    liTag.innerHTML = fruit.value;
    document.getElementById('fruits').append(liTag);
    document.getElementById('fruit').value = '';
}

let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple';
ulTag.id = 'fruits';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orenge';

ulTag.append(liTag);
ulTag.append(liTag1);


document.getElementById('show').append(ulTag);

console.log(ulTag);