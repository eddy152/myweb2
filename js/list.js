function myFunc() {
    document.write("<ul><li>Banana</li><li>Apple</li></ul>");
    let dan = 4;

    document.write('<table border="1"><td>비고</td><td>i</td>');
    for (let i = 1; i < 10; i++) {
        if (i % 2 == 1) {
            document.write('<tr><td style="background-color:yellow">' + dan + ' * ' + i +
            '</td><td style="background-color:yellow">' + (dan * i) + '</td></tr>');
        } else {
            document.write('<tr><td style="background-color:red">' + dan + ' * ' + i +
            '</td><td style="background-color:red">' + (dan * i) + '</td></tr>');
        }
    }
    document.write('</table>');
}
