// 화살표 함수
// 원하는 숫자부터 원하는 숫자까지의 합 구하기

const sumNumber = (start, end, accu) => {
    if(start > end ) return accu;
    return sumNumber(start+1, end, accu + start);

}
console.log('결과 = ', sumNumber(1,10,0)); // 결과 =  55

// 펙토리얼 구하기
const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log('펙토리얼 결과 =', factorial(4)); // 펙토리얼 결과 = 24