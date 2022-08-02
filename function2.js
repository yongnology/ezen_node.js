function sum (a,b) {
    const result = a+b;
    return result;
}
const result = sum(100, 200);
// console.log(result);

const getyymmdd = (date) => {
    const newdate = new Date(date);
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() < 9 ? `0${newdate.getMonth() + 1}` : (newdate.getMonth()+1); //
    const dd = newdate.getDate() < 10 ? `0${newdate.getDate()}` : newdate.getDate(); //

    return `${yyyy}년 ${mm}월${dd}일`;
}
let day = 100;
const date = new Date();
const dateTimestamp = date.getTime();

let dday = getyymmdd(dateTimestamp+(day*24*60*60*1000));
let dday2 = getyymmdd(new Date(dateTimestamp+(day*24*60*60*1000)));


console.log('%s일 기념일 => %s', day, dday); // 100일 기념일 => 2022년 11월10일
console.log('%s일 기념일 => %s', day, dday2); // 100일 기념일 => 2022년 11월10일
