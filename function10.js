// 클로저를 통한 은닉화
/*
function Hello(name) {
    this._name = name;
}
Hello.prototype.say = function() {
    console.log(this._name + '님 안녕하세요');
}
let hello1 = new Hello('이용민');
let hello2 = new Hello('김철수');
let hello3 = new Hello('이영희');
hello1.say();  // 이용민님 안녕하세요
hello2.say();  // 김철수님 안녕하세요
hello3.say();  // 이영희님 안녕하세요
hello1._name = '도적놈';
hello1.say();  // 도적놈님 안녕하세요
*/
function Hello(name) {
    let _name = name;  // 지역변수
    return function() {
        console.log(_name + '님 안녕하세요');
    };
}
let hello1 = Hello('이용민');
let hello2 = Hello('김철수');
let hello3 = Hello('이영희');
hello1(); // 이용민님 안녕하세요
hello2(); // 김철수님 안녕하세요
hello3(); // 이영희님 안녕하세요

hello1._name = '도적놈'; // 바뀌지 않는다.
hello1(); // 이용민님 안녕하세요
