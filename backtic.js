let na = '이용민';
let age = 25;
let str = `${na}의 나이는 ${age}세 입니다.`;

console.log(`${na}님 안녕하세요`);  // 이용민님 안녕하세요
console.log(str);   // 이용민의 나이는 25세 입니다.

let num = 20;
num = 50;
console.log(num);   // 50

const pi = 3.14;    // 상수(변하지 않는 값, 즉 수정 불가)
console.log(pi);    // 3.14

const str1 = '10';
const str2 = '20';
const num1 = 10;
const num2 = 20;
console.log('두 문자 더하기 = %s', str1 + str2);    // 1020
console.log('두 숫자 더하기 = %s', num1 + num2);    // 30
console.log('혼합 더하기 = %s', str1+num2);    // 1020
