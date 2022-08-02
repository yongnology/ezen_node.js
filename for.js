const studentList = [
    {name : '김철수', kor:80, eng:70, mat:86},
    {name : '이영희', kor:90, eng:60, mat:76},
    {name : '홍길동', kor:88, eng:77, mat:60},
];
let searhName = '이영희';
let index;
for(index = 0; index < studentList.length; index++) {
    if(studentList[index].name === searhName) {
        break;
    }
}
if(index == studentList.length) {
    console.log('시험 명단에 없습니다.');
} else {
    console.log(`${studentList[index].name}님의 성적표`);   // 이영희님의 성적표
    console.log('국어점수 = ', studentList[index].kor);     // 국어점수 =  90
    console.log('영어점수 = ', studentList[index].eng);     // 영어점수 =  60
    console.log('수학점수 = ', studentList[index].mat);     // 수학점수 =  76
}

