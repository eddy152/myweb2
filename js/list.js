function myFunc() {
    document.write('<style>.even{background-color: yellow;}</style>')
    document.write('<style>.odd{background-color: red;}</style >')
    document.write("<ul><li>Banana</li><li>Apple</li></ul>");
    let dan = 4;

    document.write('<table border="1" align="center">');
    for (let i = 1; i < 10; i++) {
        if (i % 2 == 1) {
            document.write('<tr class="even" align="center"><td style="width: 70px;">' + dan + ' * ' + i +
                '</td><td style="width: 40px;">' + ' = ' + '</td><td style="width: 50px;">' + (dan * i) + '</td></tr>');
        } else {
            document.write('<tr class="odd" align="center"><td style="width: 70px;">' + dan + ' * ' + i +
                '</td><td style="width: 40px;">' + ' = ' + '</td><td style="width: 50px;">' + (dan * i) + '</td></tr>');
        }
    }
    document.write('</table>');
}
