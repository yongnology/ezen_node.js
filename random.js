// 주사위 만들기 random()함수 

const dice = () => Math.floor(Math.random()*6)+1;
// 10~20
const dice_1 = () => Math.floor(Math.random()*10)+10;
// 시작~끝
const makeRandom = (start, end) => Math.floor(Math.random()*(end-start))+start;

function dice2() {
    return Math.floor(Math.random()*6)+1;
}

console.log('1) 주사위 값 = ', dice()); // 1) 주사위 값 =  6
console.log('2) 10~20 주사위 값 = ', dice_1()); // 2) 10~20 주사위 값 =  13

console.log('3) 주사위 값 = ', dice2()); // 3) 주사위 값 =  3

console.log(`4) 구간 난수 구하기=> ${makeRandom(30, 40)}`); // 4) 구간 난수 구하기=> 34
console.log();

const num = 23.7;
console.log(num, '의 반올림 값 : ', Math.round(num)); // 23.7 의 반올림 값 :  24
console.log(num, '의 내림 값 : ', Math.floor(num)); // 23.7 의 내림 값 :  23
console.log(num, '의 올림 값 : ', Math.ceil(num)); // 23.7 의 올림 값 :  24
console.log(-num, '의 버림 값 : ', Math.trunc(-num)); // 23.7 의 버림 값 :  23
console.log();

// 제곱
console.log('7의 제곱 = ', Math.pow(7,2)); // 7의 제곱 =  49
console.log('3의 3제곱 = ', Math.pow(3,3)); // 3의 3제곱 =  27

// 제곱근
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(9)); // 3

// 세제곱근
console.log(Math.cbrt(-8)); // -2
console.log(Math.cbrt(27)); // 3

// 양수인지 음수인지 구분
console.log(Math.sign(254)); // 1
console.log(Math.sign(-35)); // -1

