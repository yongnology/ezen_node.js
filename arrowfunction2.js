const students = [
    {name: '김철수', kor: 90, eng:75, mat: 96},
    {name: '이영희', kor: 90, eng:85, mat: 90},
    {name: '홍길동', kor: 70, eng:60, mat: 82}
]; // 배열객체

// 총점을 구하는 함수(화살표 함수)
let total = (k,e,m) => k+e+m;

// forEach 이용해서 각 성적 출력
students.forEach(student => {
    console.log(`${student.name}님의 총점 : ${total(student.kor, student.eng, student.mat)}`)
});
