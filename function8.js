// 함수의 유효 범위(Scope) - 지역변수, 전역변수
// 빼기 ----------
let resultSub;
function subtract(a, b) {
    resultSub = a-b;
}
subtract(50,20);
console.log(resultSub);  // 30

// 곱하기 ----------
function multiple(a, b) {
    const result = a*b;
    return result;
}
const r = multiple(10,10);
console.log(r);  // 100

// 더하기 ----------
function sum(a, b) {
    const resultSum = a+b;
    return resultSum;
}
sum(30+80);
console.log(resultSum); // 지역변수 이기 떄문에 오류가 뜬다.