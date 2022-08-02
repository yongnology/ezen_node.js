// searchName 사람 정보 출력

const studentList = [
    {name : '김철수', kor:80, eng:70, mat:86},
    {name : '이영희', kor:90, eng:60, mat:76},
    {name : '홍길동', kor:88, eng:77, mat:60},
];
let searchName = '홍길동';
let sw=false;
let stu={};
//● let stu;
for(const student of studentList) {
    if(student.name === searchName) {
        stu=student;
        sw = true;
        break;
    }
}
if(sw == false) {
//● if(stu==undefined) {
    console.log('시험명단에 없습니다.');
} else {
    console.log(`${stu.name}님의 성적표`);   // 이영희님의 성적표
    console.log('국어점수 = ', stu.kor);     // 국어점수 =  90
    console.log('영어점수 = ', stu.eng);     // 영어점수 =  60
    console.log('수학점수 = ', stu.mat);     // 수학점수 =  76
}

/* 
console.log("방법1 - for문1");
for(var i=0; i<studentList.length; i++) {
    console.log(studentList[i]);
};

console.log("--------------------------------------------------------")
console.log("방법2 - for문2");

for(const student2 of studentList) {
    console.log(student2);
};
console.log("--------------------------------------------------------")
console.log("방법3 - forEach문");

studentList.forEach(function(student3) {
    console.log(student3);
});

console.log("--------------------------------------------------------")
console.log("방법3 - forEach문 '=>'함수 사용");
studentList.forEach(student => console.log(student));
 */
/*
{ name: '김철수', kor: 80, eng: 70, mat: 86 }
{ name: '이영희', kor: 90, eng: 60, mat: 76 }
{ name: '홍길동', kor: 88, eng: 77, mat: 60 }
*/