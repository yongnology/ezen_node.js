// 선언적 함수
function message(data) {
    console.log(data, '코로나 조심합시다.');
}
// 표현식 함수
const corona = function() {
    console.log('오늘의 코로나 발생 현황 11245명');
}
// 화살표 함수(ES6에서 나옴)
const message2 = (data) => {
    console.log('금요일 %s 평가일입니다.',data);
}

// message('우리모두'); // 우리모두 코로나 조심합시다.
const msg = message; // 함수를 변수에 넘겨줄 떄에는 ()를 사용하지 않는다.
msg('우리모두');
corona(); // 오늘의 코로나 발생 현황 11245명
message2('react와 node.js') // 금요일 react와 node.js 평가일입니다.