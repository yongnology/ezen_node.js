// 재귀 함수 ( 화살표 함수를 활용하여 )

const hap = (a,b) => a+b;
console.log("두 수의 합 = ", hap(10,20)); // 두 수의 합 =  30
console.log();

const countdown = (value) => {
    console.log('출력값=', value);
    if(value === 0) return value;
    return countdown(value-1);
};
const lastValue = countdown(10);
console.log();
console.log('최종값=', lastValue);
/*
출력값= 10
출력값= 9
출력값= 8
출력값= 7
출력값= 6
출력값= 5
출력값= 4
출력값= 3
출력값= 2
출력값= 1
출력값= 0

최종값= 0
*/