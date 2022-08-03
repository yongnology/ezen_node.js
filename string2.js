// 문자 변경

const str = 'computer';
const repStr = str.replace('pu', 'ab');
console.log(repStr); // comabter

const str2 = '(hello)';
const repStr2 = str2.replace('(','{').replace(')','}');
console.log(repStr2); // {hello}

const dateString = "2022-08-03T10:06:00";
const repDate = dateString.replace('T',' ');
console.log(repDate); // 2022-08-03 10:06:00

const names = "홍길동,이영희,김철수";
const na = names.split(',');
console.log(na[0]); // 홍길동

const k = "korea";
const str3 = k.split('r');
console.log(str3); // [ 'ko', 'ea' ]

const date = repDate.split(" ")[0];
const time = repDate.split(" ")[1];
console.log("오늘 날짜 = %s ", date); // 오늘 날짜 = 2022-08-03 
console.log("현재 시간 = %s ", time); // 현재 시간 = 10:06:00 
