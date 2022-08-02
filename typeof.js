const num = 20;
const na = '홍길동';
console.log('num의 타입은?', typeof num);   // num의 타입은? number
console.log('na의 타입은?', typeof na); // na의 타입은? string
console.log('[]의 타입은?', typeof []); // []의 타입은? object
console.log('{}의 타입은?', typeof {}); // {}의 타입은? object

const bool = 50>20;
console.log('50>10의 타입은?', typeof bool);    // 50>10의 타입은? boolean

const num1 = 1;
console.log('num1은 무슨 타입', typeof num1); // number

const num2 = !1;
console.log(num2);  // false
console.log(typeof num2); // boolean

// 조건? 내용1: 내용2
const num3 = 50;
const num4 = 20;
const result= num3>num4? num3 : num4;

console.log(`${result}이 더 큽니다.`); // 50이 더 큽니다.

const list1 = [10,20,30];
const list2 = [];
list1.length > 0? console.log('배열값=',list1): console.log('배열값이 비었습니다.') // 배열값= [ 10, 20, 30 ]
list2.length > 0? console.log('배열값=',list2): console.log('배열값이 비었습니다.') // 배열값이 비었습니다.