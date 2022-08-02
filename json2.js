// 일단 보류, 나중에 학습예정2022.08.01. 12:50
const fs = require('fs');
const userList = [
    {name: '홍길동', age: 50, adress:'서울시 종로구'},
    {name: '김철수', age: 23, adress:'서울시 중구'},
    {name: '이영희', age: 21, adress:'서울시 영등포구'}
];

fs.writeFile('./list.json', JSON.stringify(userList), function(error) { // function(error)을 같이 써줘야 한다.
    console.log('write end!');
}) ;
