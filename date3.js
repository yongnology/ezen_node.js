const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(1659403088461);
const timestampToInit = new Date(1);

console.log('오늘 날짜의 타임스탬프: ', dateToTimestamp); // 오늘 날짜의 타임스탬프:  1659403355484
console.log('오늘 : ', timestampToDate); // 오늘 :  2022-08-02T01:18:08.461Z
console.log('타임스탬프 초기날짜 : ', timestampToInit); // 타임스탬프 초기날짜 :  1970-01-01T00:00:00.001Z
console.log('타임스탬프 초기날짜 : ', timestampToInit.toLocaleString()); // 타임스탬프 초기날짜 :  1970. 1. 1. 오전 9:00:00
