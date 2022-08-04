const fs = require('fs'); // fs 읽어오고 저장하는 기능.
fs.readFile('./list.json', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        const json = JSON.parse(data.toString());
        for(let i=0; i<json.length; i++) {
            console.log(`이름 : ${json[i].name}, 나이 : ${json[i].age}`);
        }
    }
});