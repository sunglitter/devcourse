// let str1 = "I go to a mart. I go to a MART.";
// let str1 = "A cat gets haircut c4t c_T.";
// let str1 = "Discount rate: 30%";
// let str1 = "Phone number : 010-1234-5678";
// let str1 = "Hello World ! ! ";
// let str1 = "You are a student. Your name is nice";
// let str1 = "Woops! Woops! Wooooooooopppps!";
// let str1 = "Email : Kim@gail.com";
// let str1 = "aahh aaahhhhhh";
// let str1 = "1 12 122 123 1234 12345 123456";
//let str1 = "I love Ice Cream. Do you like it";
//let str1 = "1 23 456 789 10 11 123";
let str1 = "I am a boy. You are a girl";

// ig를 추가하면 전역 검색, 대소문자 구분 없이 office로 바뀐다
//let pattern = /mart/gi;
//let pattern = /c.t/g;
//let pattern = /\w/g;
//let pattern = /\d/g;
//let pattern = /\S/g; //s S 대소문자 바꿔서 실습해보기
//let pattern = /\BYou/g; //b B 대소문자 바꿔서 실습해보기
//let pattern = /o+/g; //"Woops! Woops! Wooooooooopppps!";
//let pattern = /\w+/g; //"Email : Kim@gail.com";
//let pattern = /ah*/g; //"aahh aaahhhhhh";
//let pattern = /\d{3}/g; //"1 12 122 123 1234 12345 123456";
//let pattern = /\d{5,}/g; //"1 12 122 123 1234 12345 123456";
//let pattern = /[ae]/g; // "I love Ice Cream. Do you like it";
//let pattern = /[^o-z]/g;
//let pattern = /[^A-C]/g;
//let pattern = /[^1-3]/g; // "1 23 456 789 10 11 123";
let pattern = /(am | are)/g; // "I am a boy. You are a girl";

let pattern2 = /e\b/g;
//replace 하면 mart를 office로 바꾼다
//let result = str1.replace(pattern, "office");
let result = str1.match(pattern);
let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + '<br>';
// text += result2 + "<br>";
// document.getElementById("show").innerHTML = text;

// 문제 1 apple 단어 포함 여부 확인
// 문제 2 모든 대문자 찾기
// 문제 3 결과: 100, 200, 300 이 나오도록 정규식으로 작성
// 문제 4 결과: o, d, o, o, d, o 가 나오도록 정규식으로 작성
// 문제 5 결과: 9,9,0,9 가 실행되도록 정규식 작성
// 문제 6 결과: A가 최소 1번 최대 2번 반복되는 문자열을 검색
// 문제 7 0 ~ 9가 한번 이상 반복되는 문자열 검색
let qstr1 = "I love Apple pie and apple juice."
let qstr2 = "Hello World! This is a Test String."
let qstr3 = "1 10 100 2000 30000"
let qstr4 = "How do you do"
let qstr5 = "89139012349"
let qstr6 = "A AA B BB Aa Bb AAA"
let qstr7 = "AA BB 12 345"
let qpt1 = /apple/ig;
let qpt2 = /[A-Z]/g;
let qpt3 = /\d{3}/ig; // 모르겠음 -> 숫자가 3번 반복하는 문자열과 매치. 같은 숫자를 의미하는 것이 아니라 그냥 숫자 자체가 연달아 3번 사용된 것
let qpt4 = /(o+|d+)/ig; // /[do]/g; 도 가능함
let qpt5 = /(9|0)/g; // /^[1-8]/g; 도 가능함
let qpt6 = /A{2,}/g;
let qpt7 = /\d+/g; // /[0-9]+/g; 도 가능함
let qr1 = qstr1.match(qpt1);
let qr2 = qstr2.match(qpt2);
let qr3 = qstr3.match(qpt3)
let qr4 = qstr4.match(qpt4)
let qr5 = qstr5.match(qpt5)
let qr6 = qstr6.match(qpt6)
let qr7 = qstr7.match(qpt7)

let text = "";
text += qr1 + '<br>';
text += qr2 + "<br>";
text += qr3 + "<br>";
text += qr4 + "<br>";
text += qr5 + "<br>";
text += qr6 + "<br>";
text += qr7 + "<br>";
document.getElementById("show").innerHTML = text;