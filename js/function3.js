function input_friend() {
    
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let hobby = document.getElementById('hobby');
    
    let friend = {};
    friend.name = name.value;
    friend.age = age.value;
    friend.hobby = hobby.value;
    
    let num = 0;
    
    friends = [];
    friends[num] = friend;
    num++;


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
}

