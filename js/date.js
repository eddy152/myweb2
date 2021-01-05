let year = window.prompt('연도를 입력하세요.');
while (year < 1900 || year > 2100) {
    year = window.prompt('|(연)오류' + year + '| 다시 입력하세요.');
}
let month = window.prompt('월을 입력하세요.');
while (month < 1 || month > 12) {
    month = window.prompt('|(월)오류|' + month + '다시 입력하세요.');
}

function showCal(yyyy, mm) {
    let h1 = document.createElement('h1');
    h1.innerHTML = yyyy + '년 ' + mm + "월";
    document.getElementById('show').append(h1);

    function createHeader(a) {
        let tdTag = document.createElement('th');
        tdTag.innerHTML = a;
        trTag.append(tdTag);
        tableTag.append(trTag);
    }

    function createData(item, idx) {
        if (idx % 7 == 0) {
            trTag = document.createElement('tr');
        }
        let tdTag = document.createElement('td');
        tdTag.setAttribute('style', 'text-align:center;')
        if (idx % 7 == 0) {
            tdTag.setAttribute('style', 'background: red; color: white; text-align:center;')
        } else if (idx % 7 == 6) {
            tdTag.setAttribute('style', 'background: blue; color: white; text-align:center;')
        }
        
        tdTag.innerHTML = item;
        trTag.append(tdTag);
        tableTag.append(trTag);
    }

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Str'];
    let dates = [];

    today = new Date(yyyy, mm, 0);
    day = new Date(yyyy, mm - 1, 1);
    
    for (let q = 0; q < day.getDay(); q++) {
        dates.push('');
    }
    for (let i = 1; i <= today.getDate(); i++) {
        dates.push(i);
    }

    let tableTag = document.createElement('table');
    tableTag.setAttribute('id', 'tbl');

    let trTag = document.createElement('tr');

    days.forEach(createHeader);
    dates.forEach(createData);

    document.getElementById('show').append(tableTag);
}
showCal(year, month);