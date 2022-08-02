const today = new Date();
const date1 = new Date(2022,12-1,24);  // 가운데 년 월 일 중 월은 0번부터 있기 때문에 최대 숫자가 11이다.
const date2 = new Date(2022,12-1,25,18,30,20); // 년, 월, 일, 시간, 분, 초

console.log(today); // 2022-08-02T00:24:07.898Z
console.log(today.toLocaleString()); // 2022. 8. 2. 오전 9:24:07

console.log('크리스마스 이브 => ',date1.toLocaleString()); // 크리스마스 이브 =>  2022. 12. 24. 오전 12:00:00
console.log('크리스마스 예배시간 => ', date2.toLocaleString()); // 크리스마스 예배시간 =>  2022. 12. 25. 오후 6:30:20
console.log('오늘 날짜 %s', today.toLocaleDateString()); // 오늘 날짜 2022. 8. 2.
console.log('현재시간 : %s', today.toLocaleTimeString()); // 현재시간 : 오전 9:31:11
console.log('현재 년도 : %s', today.getFullYear()); // 현재 년도 : 2022
console.log('현재 월 : %s', today.getMonth()+1); // 현재 월 : 8 // ★월은 +1을 해줘야 한다.
console.log('현재 일 : %s', today.getDate()); // 현재 일 : 2

// today.getHours() -시, today.getMinutes() -분, today.getSeconds() - 초
let price = 7800000;
console.log(`물품의 가격은 ${price.toLocaleString()}원 입니다.`); // 물품의 가격은 7,800,000원 입니다.