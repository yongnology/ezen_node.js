/* 
function hello1() {
    console.log('안녕하세요');
}
*/
const hello1 = () => {
    console.log('안녕하세요');
}
const hello1_1 = () => console.log('안녕하세요'); // 한줄일떄는 중괄호 생략가능하다.

/* -------------------------------------------------------* */
/* 
function sum2 (a, b) {
    return a+b;
}
 */
const sum2 = (a, b) => {
    return a+b;
}
const sum2_1 = (a, b) => a+b; // return 한줄이면 return 및 괄호 생략 가능
/* 
function hello22(name) => a+b;
function hello22(name){) {
    console.log(name + '님 아녕하세요');
} */
/* -------------------------------------------------------* */

const hello2 = name =>console.log(name + '님 안녕하세요');
hello2('김철수');

/* -------------------------------------------------------* */

const sumAndPrint=(num1, num2) => {
    const result = num1 + num2;
    return `두 수의 합은 ${result}입니다.`
}
console.log(sumAndPrint(45, 30));