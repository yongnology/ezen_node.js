// 합성함수 - 여러개를 합쳐서 쓰는 방법

const plus = (a,b) => a + b;
const minus = (a,b) => a - b;
const multiple = (a,b) => a * b;
const add10 = x => x + 10;

console.log(multiple(add10(70),3))  // 240
console.log(minus(plus(10,20),15))  // 15
