const nums = [10,20,30];
nums.reverse();
console.log(nums); // [ 30, 20, 10 ]

const scores = [85,96,70,88,60];
const names = ['이영희', '홍길동', '손흥민', '김철수']
const sortNames = names.sort();
const sortScores = scores.sort();
console.log(sortNames); // [ '김철수', '손흥민', '이영희', '홍길동' ]
console.log('오름차순 정렬',sortScores); // 오름차순 정렬 [ 60, 70, 85, 88, 96 ]
console.log('내림차순 정렬',sortScores.reverse()); // 내림차순 정렬 [ 96, 88, 85, 70, 60 ]
