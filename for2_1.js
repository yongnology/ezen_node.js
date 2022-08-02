// foreach 문 활영하여 평균 구하기
const scores = [58,96,74,80,77];
let sum = 0
scores.forEach(function(score) {
    sum+= score;
});

console.log('점수의 총합 = ', sum); // 점수의 총합 =  385
