function plus(num1, num2) {
    return num1 + num2;
}
// const plus = (num1, num2) => num1 + num2;

function minus (num1, num2) {
    return num1 - num2;
}
// const minus = (num1, num2) => num1 - num2;

let p=plus;
console.log("plus 타입은?", typeof plus); // plus 함수의 타입은? function
console.log("p 타입은?", typeof p); // p 타입은? function
console.log('두 수의 합 = %d', p(20,30)); // 두 수의 합 = 50

function calc(num1, num2, func) {
    return func(num1, num2);
}
console.log("두 수의 합 =",calc(10,20, plus)); // 두 수의 합 = 30
console.log("두 수의 차 =",calc(10,20, minus)); // 두 수의 차 = -10


function calc2(num1, func, num2) {
    return func(num1, num2);
}

console.log("두 수의 합 =",calc2(15,plus, 2)); // 두 수의 합 = 17
console.log("두 수의 차 =",calc2(50,minus, 2 )); // 두 수의 차 = 48