// JSON(javaScript Object Notation: 자바스크립트 객체 표기법)

const user = {};
user.name = '김철수';
user.age = 26;
console.log(user.age); // 26
console.log(user);  // { name: '김철수', age: 26 }
const person = {
    name:'홍길동',
    age: 50,
    job:'도적'
};
console.log('이름:', person.name); // 이름: 홍길동
console.log(person['age']); // 50
