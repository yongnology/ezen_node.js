// 하나의 기준으로 정렬

const studentList = [
    {name: '홍길동', age: 50, kor:80, eng: 70},
    {name: '김철수', age: 22, kor:70, eng: 90},
    {name: '이영희', age: 22, kor:90, eng: 80},
    {name: '박찬호', age: 45, kor:60, eng: 82},
    {name: '손흥민', age: 31, kor:77, eng: 86}
];

const sorted = studentList.sort((before, next) => before.age - next.age);
console.log('나이 오름차순 정렬 => ', sorted);
console.log('나이 내림차순 정렬 => ', sorted.reverse());
console.log();
/*
나이 오름차순 정렬 =>  [
  { name: '김철수', age: 22, kor: 70, eng: 90 },
  { name: '이영희', age: 22, kor: 90, eng: 80 },
  { name: '손흥민', age: 31, kor: 77, eng: 86 },
  { name: '박찬호', age: 45, kor: 60, eng: 82 },
  { name: '홍길동', age: 50, kor: 80, eng: 70 }
]
나이 내림차순 정렬 =>  [
  { name: '홍길동', age: 50, kor: 80, eng: 70 },
  { name: '박찬호', age: 45, kor: 60, eng: 82 },
  { name: '손흥민', age: 31, kor: 77, eng: 86 },
  { name: '이영희', age: 22, kor: 90, eng: 80 },
  { name: '김철수', age: 22, kor: 70, eng: 90 }
]
 */

const names=['이영희','김철수', '이동국', '홍길동', '이영표']
const sliced = names.slice(1,3);  // 첫번째 이상 세번째 미만
console.log(sliced);  // [ '김철수', '이동국' ]
console.log();

const third = studentList.sort((before, next) => before.eng - next.eng);
console.log(third.reverse().slice(0,3));
// const sliced2 = third.slice(0,3);
// console.log(sliced2);
