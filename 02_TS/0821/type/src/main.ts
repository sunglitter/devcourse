// const add = function (a: number, b: number): number {
//   return a + b;
// };

// function add2(a: number, b: number): number {
//   return a + b;
// }
// const result1 = add2(1, 2);

// const str = "hello";
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym = Symbol("sym");
// const obj = { hello: "world" };

// let str = "hello";
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol("sym");
// let obj = { hello: "world" };

// let str: 'hello' = 'hello'
// str = 'world'

// const obj = { name: "kim" };
// const arr = [1, 2, "three"];

// obj.name = "lee";
// arr.push(4);

// const arr1: string[] = ["1", "2", "3"];
// const arr2: Array<number> = [1, 2, 3];

// const arr3 = [1, "3", 3];
// const arr4 = [];

// const tuple: readonly[number, boolean, string] = [1, true, "hello"];

// tuple.push("hello");
// console.log(tuple);

// const strNumBools: [string, number, ...boolean[]] = [
//   "hello",
//   1,
//   false,
//   true,
//   false,
// ];

// const [a, ...rest] = ["hello", 1, 2, 3];
// const [b, ...rest2]: [string, ...number[]] = ["hello", 1, 2, 3];

// function add(x: number, y: number) {
//   return x + y;
// }
// const str1: String = "hello";
// const str2: string = str1;

// function add(x: number, y: number) {
//   return x + y;
// }
// const result1: add(1, 2) = add(1, 2);
// const result2: typeof add(1, 2) = add(1, 2);
// const add2: typeof add = (x: number, y: number) => x + y;

// let strNum: string | number = "hello";
// strNum = 1;
// const arr = [1, "2", 3];

// function unionType(value: string | number): number {
//   if(typeof value === 'string') {
//     return parseInt(value)
//   }
//   return value;
// }
// unionType(1);
// unionType('1');

// const arr: string[] = [];

// const arr = [];
// arr.push('1');
// arr;
// arr.push(3);
// arr;

// const a: any = '123';

// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;

// fetch("url")
//   .then< {data: string} >((response) => {
//     return response.json();
//   })
//   .then((result) => {});
// const result: {hello: string} = JSON.parse('{"hello": "json"}');

// try {
// } catch (e) {
//   const error = e as Error;
//   console.log(error.message);
// }

// // 문제 1 -> name이 lib.dom.d.ts:27609:15 에서 이미 선언된 변수이기에 문제에 적합하지 않은 변수였다고 생각됨
// let name = "kim";

// // 문제 2
// function add(a: number, b: number): number {
//   return a + b;
// }

// // 문제 3
// function isEven(num: number): boolean {
//   return num % 2 === 0;
// }
