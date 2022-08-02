function hello() {
    console.log('안녕하세요');
}
try {
    hello();
} catch(e) {
    console.error(e);
}finally {
    console.log('난 무조건 실행');
}
/* 안녕하세요
난 무조건 실행 */

try {
    bye();
} catch(e) {
    console.error(e);
}finally {
    console.log('난 무조건 실행2');
}
/*
ReferenceError: bye is not defined
...(부가설명)
난 무조건 실행2
*/
