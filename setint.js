// 시간마다 관련 함수

// setTimeout(() => console.log('안녕하세요'), 1500);
/*
const my = setInterval(() => console.log('안녕하세요2'), 500);
setTimeout(() => clearInterval(my), 10000);
*/
const hello = () => console.log('안녕하세요');
setInterval(hello, 2000);