/* 
커링(curring)
=> 여러 개의 파라미터(매개변수)를 갖는 함수가 있을 때
그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법
 */
const add = x => y => x + y;
const add10 = add(10);

console.log(add10);  // [Function (anonymous)]
console.log(add10(20));  // 30
console.log(add(10)(20));  // 30

const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`
const americanoMachine =coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffe bean');
const latte = latteMachine('coffe bean');

console.log(americano); // coffe bean + water
console.log(latte); // coffe bean + milk


