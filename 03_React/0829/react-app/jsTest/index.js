// 문제 1
// const numbers = [5, 10, 15, 20, 25, 30];
// numbers.forEach((num, index) => {
//   let count = 0;
//   if (num % 2 === 0) {
//     numbers.splice(index - count, 1);
//     count += 1;
//   }
// });
// document.write("배열의 남은 요소: " + numbers);

// 강사님 풀이
// const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach((item, index) => {
//   if (item % 2 == 0) {
//     console.log(item);
//     numbers.splice(index, 1);
//   }
// });

// document.write(`배열의 남은 요소 : [${numbers}]`);

// 문제 2
// const fruits = [
//   { 이름: "apple", 수량: 2, 가격: 1000 },
//   { 이름: "banana", 수량: 3, 가격: 2500 },
//   { 이름: "orange", 수량: 5, 가격: 5000 },
// ];

// const orange = fruits.find((fruit) => fruit.이름 === "orange");
// document.write("이름 : " + orange.이름 + "<br>");
// document.write("수량 : " + orange.수량 + "<br>");
// document.write("가격 : " + orange.가격 + "<br><br>");

// 강사님 풀이
// const fruits = [
//   { name: "apple", quantity: 2, price: 1000 },
//   { name: "banana", quantity: 3, price: 2500 },
//   { name: "orange", quantity: 5, price: 5000 },
// ];

// const result = fruits.find((fruit) => fruit.name === "banana");

// document.write(
//   `이름 : ${result.name}<br>수량 : ${result.quantity}<br>가격 : ${result.price}`
// );

// 문제 3
// const array = ["javascript", "css", "react", "html"];
// let foundItems = []; // 찾은 아이템들을 저장할 배열
// let startIndex = 0; // 검색을 시작할 인덱스

// while (startIndex < array.length) {
//   const foundItem = array.find(
//     (item, index) => index >= startIndex && item.length >= 5
//   );
//   if (foundItem) {
//     document.write(foundItem + " : " + foundItem.length + "<br>");
//     foundItems.push(foundItem);
//     startIndex = array.indexOf(foundItem) + 1;
//   } else {
//     document.write("<br>");
//     break;
//   }
// }

// 강사님 풀이
// const array = ["javascript", "css", "react", "html"];

// const result = array.find((item) => {
//   if (item.length > 4) {
//     document.write(`${item} : ${item.length}<br>`);
//   }
// });

// 문제 4
// const numberss = [5, 19, 42, 36, 70];
// const modifiedNums = numberss.map((number) => {
//   const doubled = number * 2;
//   if (doubled % 3 === 0) {
//     return doubled * 2;
//   }
//   return doubled;
// });

// const resultString = modifiedNums.join(",");
// document.write("결과 : " + resultString);

// 강사님 풀이
const numbers = [5, 19, 42, 36, 70];

const result = numbers.map((item) => item * 2);
console.log(result);

const newArr = result.map((item) => {
  if (item % 3 == 0) {
    item = item * 2;
  }
  return item;
});

document.write(`결과 : ${newArr}`);
