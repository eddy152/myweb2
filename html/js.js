var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "World";

var divTag = document.createElement("div");
divTag.innerHTML = "Nice";

document.getElementById('show').after(divTag);

var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML = "Apple";
li_2.innerHTML = "Orange";

document.getElementById("fruit").append(li_1);
document.getElementById("fruit").append(li_2);

// for (var t = 1; t <= 9; t++) {
//     console.log(t + '단');
//     for (var i = 1; i <= 9; i++) {
//         var str = t + ' * ' + i + ' = ' + (t * i);
//         console.log(str);
//     }
// }

        // var sum = 0;

        // while (true) {
        //     console.log(sum)
        //     if (sum < 5050) {
        //         sum++
        //     } else {
        //         break;
        //     }
        // }