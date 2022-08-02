const num1 = isNaN(20); // Is Not Number    
const num2 = isNaN('30');
console.log(num1);  // false;

const num = '50';
let result;

if(isNaN(num)) {    // isNaN 함수는 먼저 숫자로 강제된다.
    result = '숫자가 아닙니다.'
} else {
    result = '숫자입니다.'
}

console.log(result);    // 숫자입니다.
const str = 'computer';
console.log('문자열의 길이 : ',str.length); // 문자열의 길이 :  8
console.log('문자열[0]: ',str[0]);  // 문자열[0]:  c
console.log('문자열[5]: ',str[5]);  // 문자열[5]:  t

console.log(`${str}라는 문자에서 마지막 글자는 ${str[str.length-1]}입니다.`);    // computer라는 문자에서 마지막 글자는 r입니다.

// indexOf(문자열을 찾음)
console.log(str.indexOf('com'));    // 0
console.log(str.indexOf('put'));    // 3    // 3번째에 등장
console.log(str.indexOf('the'));    // -1   // -> 못찾았기 때문에