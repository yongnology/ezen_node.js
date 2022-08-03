function helloPrint() {
    console.log('안녕하세요');
    setTimeout(function() {
        helloPrint();
    },3000);
}

helloPrint();
/*
(한번 출력)
안녕하세요
(3초후)
안녕하세요
(3초후)
안녕하세요
(3초후)
안녕하세요
(3초후)
...
*/