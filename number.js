// 문자타입 숫자를 숫자 타입으로 변환

const price1 = '3000';
const price2 = '2000';
console.log('가격의 총합 = ', Number(price1)+ Number(price2)); // 가격의 총합 =  5000
console.log('가격의 총합 = ', parseInt(price1)+ parseInt(price2)); // 가격의 총합 =  5000

const num1 = '23.4';
const num2 = '12.8';
console.log('가격의 총합 = ', Number(num1)+ Number(num2)); // 가격의 총합 =  36.2
console.log('가격의 총합 = ', parseInt(num1)+ parseInt(num2)); // 가격의 총합 =  35

const price3 = '3000원';
const price4 = '2000원';
console.log('가격의 총합 = ', Number(price3)+ Number(price4)); // 가격의 총합 =  NaN
console.log('가격의 총합 = ', parseInt(price3)+ parseInt(price4)); // 가격의 총합 =  5000

const price5 = '원가3000원';
const price6 = '원가2000원';
console.log('가격의 총합 = ', Number(price5)+ Number(price6)); // 가격의 총합 =  NaN
console.log('가격의 총합 = ', parseInt(price5)+ parseInt(price6)); // 가격의 총합 =  NaN