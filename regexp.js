// 정규표현식 - 문자 삭제 하기 활용

const str= ('<h1>안녕하세요</h1>');
// const result = str.replace('<h1>','').replace('</h1>','');

//const result= str.replace(/정규표현식/g, '');
const result = str.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('결과=%s',result); // 결과=안녕하세요

const str1 = '<h1>특별가 - <h1><h2>55,000원</h2>';
const result1 = str1.replace(/<..>/g, '').replace(/<...>/g, '');
     // <..> 글자 2개 있는 태그, <...> 글자 3개 있는 태그
console.log(result1); // 특별가 - 55,000원
console.log();

const str2 = "<div>특별가 - <h2>55,500원</h2></div>";
const result2 = str2.replace(/<.{0,1}h2>/g, '');
const result2_1 = result2.replace(/<.{0,1}div>/g, '');
const result2_2 = str2.replace(/<.{0,4}>/g, '');

// {0,1} 0개 또는 1개 즉 0개인 <h2>, 1개인 </h2> 모두 선택한다는 의미이다.
console.log(result2); // <div>특별가 - 55,500원</div>
console.log(result2_1);
console.log(result2_2);
console.log();

const str3 = "/정상가/ - 300,000원(특별, 할인가 - 23,000원)";
// const result3 = str3.replace(/정규표현식/g, "");
const result3 = str3.replace(/[(),-/]/g,""); // 대괄호를 쓰면 안쪽 내용이 모두 삭제 된다.
                                              // [삭제할문자들]
console.log(result3); // 정상가  300000원특별 할인가  23000원
console.log

const text = 'hello my name is gildong';
// const matched = text.match(/정규표현식/g);
const matched = text.match(/[a-i]{1,2}/g); // a부터 i까지 문자를 1개또는 2개씩
const matched1 = text.match(/[a-l]{1,3}/g); // a부터 l까지 문자를 1개또는 3개씩
console.log(matched);
console.log(matched1);
