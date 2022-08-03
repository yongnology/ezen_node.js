// 문제
/*
 전체 학생중에서 영어 점수가 높은 3사람만 경시대회에 출전시키려고 한다.
 배열객체에서 추출하시오.
 */

const studentList = [
    {name: '홍길동', age: 50, kor:80, eng: 70},
    {name: '김철수', age: 22, kor:70, eng: 90},
    {name: '이영희', age: 22, kor:90, eng: 80},
    {name: '박찬호', age: 45, kor:60, eng: 82},
    {name: '손흥민', age: 31, kor:77, eng: 86}
];

const sorted = studentList.sort((before, next) => next.eng - before.eng);
// 배열 객체는 특수하게 reverse가 아닌 next와 before만 바꾸면 된다.
const sliced = sorted.slice(0,3);
console.log("**영어 경시대회 참여 명단 자료**",sliced);

/*
**영어 경시대회 참여 명단 자료** [
  { name: '김철수', age: 22, kor: 70, eng: 90 },
  { name: '손흥민', age: 31, kor: 77, eng: 86 },
  { name: '박찬호', age: 45, kor: 60, eng: 82 }
] 
*/