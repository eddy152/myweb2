friends = [];
let num = 0;

function input_friend() {
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;

    let friendss = document.getElementById('friends');

    let trTag = document.createElement('tr');
    friendss.append(trTag);

    let tdTag = document.createElement('td');
    let tdTag1 = document.createElement('td');
    let tdTag2 = document.createElement('td');
    
    tdTag.innerHTML = namef;
    tdTag1.innerHTML = agef;
    tdTag2.innerHTML = hobbyf;

    document.getElementById('friends').append(tdTag);
    document.getElementById('friends').append(tdTag1);
    document.getElementById('friends').append(tdTag2);

    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('hobby').value='';

    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;
    
    friends[num++] = friend;
    console.clear();

    for (friend of friends) {
        for (field in friend) {
            console.log(friend[field]);
        }
    }
}
