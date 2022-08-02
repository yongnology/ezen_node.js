const getyymmdd = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth()+1); //
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); //

    return `${yyyy}년 ${mm}월${dd}일`;
}

/* 
const date1 = new Date();
const date2 = new Date(2022,12-1,24);

console.log(date1.toLocaleDateString()); // 2022. 8. 2.
console.log(date2.toLocaleDateString()); // 2022. 12. 24.
 */

const date3 = getyymmdd(new Date());
const date4 = getyymmdd(new Date(2022-12-1,24));
console.log(date3);
console.log(date4);