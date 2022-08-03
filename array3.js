// 정렬하기

const studentList = [
    {name: '홍길동', age: 50, kor:80, eng: 70},
    {name: '김철수', age: 22, kor:70, eng: 90},
    {name: '이영희', age: 22, kor:90, eng: 80},
    {name: '박찬호', age: 45, kor:60, eng: 82},
    {name: '손흥민', age: 31, kor:77, eng: 86}
];
studentList.sort((beforeStudent, nextStudent) => {
    if(beforeStudent.age > nextStudent.age) return 1;
    else if(beforeStudent.age < nextStudent.age) return -1;
    else if(beforeStudent.kor > nextStudent.kor) return -1;
    else if (beforeStudent.kor < nextStudent.kor) return
    return 0;
});
console.log(studentList.sort());

/*
[
  { name: '김철수', age: 22, kor: 70, eng: 90 },
  { name: '이영희', age: 22, kor: 90, eng: 80 },
  { name: '손흥민', age: 31, kor: 77, eng: 86 },
  { name: '박찬호', age: 45, kor: 60, eng: 82 },
  { name: '홍길동', age: 50, kor: 80, eng: 70 }
]
*/
