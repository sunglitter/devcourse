// const str:{} = 'hello';
// const num:{} = 123;
// const bool:{} = true;
// const obj:{} = {name: 'kim'};
// const arr:{} = [];
// const func:{} = () => {};
// const n:{} = null;
// const u:{} = undefined;
// obj.name;
// arr[0];

// function func1() {
//   throw new Error("error");
// }
// const result1 = func1();
// const func2 = () => {
//   throw new Error("error");
// };
// const result2 = func2();

// function infinity(): never {
//   while (true) {
//     console.log("반복");
//   }
// }
// function strNum(param: string | number) {
//   if (typeof param === "string") {
//   } else if (typeof param === "number") {
//   } else {
//     param;
//   }
// }

// type Person = {
//   name: string;
//   age: number;
//   married: boolean;
// };
// const person1: Person = {
//   name: "kim",
//   age: 28,
//   married: false,
// };

// interface Person {
//   name: string;
//   age: number;
//   married: boolean;
// }

// const person1: Person = {
//   name: "kim",
//   age: 28,
//   married: false,
// };

// interface Func {
//   (x: number, y: number): number;
// }
// const add: Func = (x, y) => x + y;

// interface Arr {
//   length: number;
//   [key: number]: string;
// }

// const arr: Arr = ["1", "2", "3"];

// const obj = {}
// obj[123] = '숫자 키';

// interface NoProp {}
// const obj2 = {
//   txt: "에러 안 남",
// };
// const result: NoProp = "안녕";
// const result2: NoProp = undefined

// type Animal = {
//   name: string;
// };
// interface Bear extends Animal {
//   honey: boolean;
// }
// interface Tiger extends Animal {
//   stripe: boolean;
// }

// interface BearTiger extends Bear, Tiger {}
// type honey = BearTiger["honey"];
// type stripe = BearTiger["stripe"];
// const bear1: Bear = {
//   name: "bear",
//   honey: true,
// };

// interface Merge {
//   one: string;
//   two: string;
// }

// interface Merge2 extends Merge {
//   one: "h" | "w";
//   two: "123";
// }

// // 문제 1: Name이라는 타입 별칭을 만들어 문자열 타입을 나타내도록 하세요.
// // 그리고 이 타입 별칭을 사용하여 firstName과 lastName 변수를 선언하세요.
// type Name = string;
// const firstName: Name = "kim";
// const lastName: Name = "lee";

// // 문제 2: 두 개의 숫자를 받아 숫자를 반환하는 함수 타입을 정의하고, 이를 MathO이라는 타입 별칭으로 저장하세요.
// // 이 타입 별칭을 사용하여 add 함수와 multiply 함수를 선언하세요.
// type MathO = (a: number, b: number) => number;

// const add: MathO = (x, y) => x + y;
// const multiply: MathO = (x, y) => x * y;

// // 문제 3: Shape라는 인터페이스를 정의하세요. 이 인터페이스는 color(문자열) 속성을 가집니다.
// // Shape를 확장하여 Circle 인터페이스를 정의하고, radius(숫자) 속성을 추가하세요.
// // 이 인터페이스를 사용하여 circle 객체를 선언하고 초기화하세요.

// interface Shape {
//   color: string;
// }

// interface Circle extends Shape {
//   radius: number;
// }

// const circle: Circle = {
//   color: "red",
//   radius: 2,
// };

// // 문제 4: Animal이라는 인터페이스를 정의하세요. 이 인터페이스는 name과 age라는 두 개의 속성을 가집니다.
// // Animal 인터페이스를 확장하여 Dog 인터페이스를 정의하고 breed 속성을 추가하세요.
// // 이 인터페이스를 사용하여 dog 객체를 선언하고 초기화하세요.

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const dog: Dog = {
//   name: "B",
//   age: 2,
//   breed: "g",
// };

// namespace Exam {
//   export interface Inner {
//     test: string;
//   }
//   export type test2 = number;
// }
// const ex1: Exam.Inner = {
//   test: "hello",
// };
// const ex2: Exam.test2 = 123;

// interface Exam {
//   hello: string;
//   world?: number;
//   readonly check: boolean;
//   multiply?: symbol;
// }
// const example:Exam = {
//   hello: 'hi',
//   world: 123,
//   check: true,
// }
// example.check = false;

// const obj = {
//   hello: 'world',
//   name: 'kim',
//   age: 28,
// }
// type Keys = keyof typeof obj;
// type Values = typeof obj['hello' | 'age']

// type Arr = [1, 2, 3];
// type First = Arr[0];
// type length = Arr['length']

// type Arr2 = (string | boolean)[];
// type El = Arr2[number];

// type HelloHi = {
//   [key in 'hello' | 'hi']: string;
// }

// type Tuple = [1, 2, 3];
// type CopyTuple = {
//   [key in keyof Tuple]: Tuple[key];
// }
// const copyTupl: CopyTuple = [1, 2, 3];

// type A = string | boolean;
// type B = boolean | number;
// type C = A & B;
// type D = {} & (string | null);
// type F = unknown | {};
// type G = never & {};
// type H = {a: 'b'} & number;
// type I = null & {a: 'b'};
// type J = {} & string;

// let a: ["hi", "readonly"] = ["hi", "readonly"];
// let b: string[] = ["hi", "normal"];

// a = b;
// b = a;

// type Optional = {
//   a?: string;
//   b?: string;
// };

// type Essential = {
//   a: string;
//   b: string;
// };

// const o: Optional = {
//   a: "hello",
// };

// const e: Essential = {
//   a: "hello",
//   b: "world",
// };

// const o2: Optional = e;
// const e2: Essential = o;

// interface Money {
//   _type: "money";
//   amount: number;
//   unit: string;
// }

// interface Liter {
//   _type: "liter";
//   amount: number;
//   unit: string;
// }

// const liter: Liter = { amount: 1, unit: "liter", _type: "liter" };
// const circle: Money = liter;

// // 문제 5: Product라는 인터페이스를 정의하세요. 이 인터페이스는 name(문자열)과 price(숫자) 속성을 가지며,
// // description(문자열)은 선택적 속성으로 정의합니다. 이 인터페이스를 사용하여 product1과 product2 객체를 선언하고 초기화하세요.
// interface Product {
//   name: string;
//   price: number;
//   description?: string;
// }

// const product1: Product = {
//   name: "a",
//   price: 1000,
// };

// const product2: Product = {
//   name: "b",
//   price: 2000,
//   description: "bb",
// };

// // 문제 6: Dictionary라는 인터페이스를 정의하세요. 이 인터페이스는 임의의 키는 문자열이고 값은 문자열인 속성을 가질 수 있도록
// // 인덱스 시그니처를 포함합니다. 이 인터페이스를 사용하여 dictionary 객체를 선언하고 임의의 키-값 쌍을 추가하세요.
// interface Dictionary {
//   [key: string]: string;
// }
// const dictionary: Dictionary = {
//   a: "b",
// };
// dictionary["book"] = "abc";

// interface Person<T, A> {
//   type: "human";
//   race: "yellow";
//   name: T;
//   age: A;
// }
// interface Kim extends Person<"Kim", 20> {}
// interface Lee extends Person<"Lee", 22> {}
// interface Array<T> {
//   [key: number]: T;
//   length: number;
// }
// const numbers: Array<number> = [1, 2, 3, 4];

// const personE = <N, A>(name: N, age: A) => ({
//   type: 'human',
//   race: 'yellow',
//   name,
//   age,
// })

// interface PersonI<N, A> {
//   type: "human";
//   race: "yellow";
//   name: N;
//   age: A;
// }
// type PersonT<N, A> = {
//   type: "human";
//   race: "yellow";
//   name: N;
//   age: A;
// };
// type Kim = PersonI<"kim", 28>;
// interface Lee extends PersonT<"lee", 11> {}

// class Person<N, A> {
//   name: N;
//   age: A;
//   constructor(name: N, age: A) {
//     this.name = name;
//     this.age = age;
//   }
//   method<B>(param: B) {}
// }
// interface PersonI<N, A> {
//   name: N;
//   age: A;
//   method<B>(param: B): void;
// }

// interface Person<N = string, A = number> {
//   type: "human";
//   race: "yellow";
//   name: N;
//   age: A;
// }
// type Person1 = Person;
// type Person2 = Person<number>;
// type Person3 = Person<number, boolean>;

// const personE = <N, A = unknown>(name: N, age: A): Person<N, A> => ({
//   type: 'human',
//   race: 'yellow',
//   name,
//   age,
// })
// const names = personE('kim', 28)

// function values<T>(initial: T[]){
//   return {
//     hasValue(value: T){
//       return initial.includes(value)
//     }
//   }
// }
// const savedValues = values(['a', 'b', 'c'])
// savedValues.hasValue('s');

// type A1 = string;
// type B1 = A1 extends string ? number : boolean;
// type A2 = number;
// type B2 = A2 extends string? number: boolean;

// interface X {
//   x: number;
// }
// interface XY {
//   x: number,
//   y: number,
// }

// interface YX extends X {
//   y: number
// }
// type A = XY extends X ? string : number;
// type B = YX extends X ? string : number;

// type result = [1] extends number[] ? true : false;

// type Start = string | number;
// type New = Start extends string | number ? Start[] : never;
// let n: New = ['hi'];
// n = [123];

// type New<A> = A extends string ? string[] : never;
// type Never = New<number>;
// type Arr = New<string>

// // 문제 7: 배열의 첫 번째 요소를 반환하는 제네릭 함수를 작성하세요.
// function firstEl<T>(arr: T[]): T {
//   return arr[0];
// }
// console.log(firstEl([1, "err", false]));

// // 문제 8: length 속성을 가진 객체만을 받는 제네릭 함수를 작성하세요.
// function leng<T extends { length: number }>(item: T) {
//   console.log(item.length);
// }
// leng("hello");

// // 문제 9: 두 값을 받아서 그 중 큰 값을 반환하는 제네릭 함수를 작성하세요.
// function numBig<T extends number>(a: T, b: T): T {
//   return a > b ? a : b;
// }
// console.log(numBig(10, 20));

// // 문제 10: IsString<T> 타입을 구현하세요. T가 string 타입이라면 true를 반환하고, 그렇지 않으면 false를 반환하도록
// type IsString<T> = T extends string ? true : false;
// type Test1 = IsString<string>;
// type Test2 = IsString<number>;

// 문제 11: StringS<T> 타입을 구현하세요. T가 유니온 타입일 경우, string 타입인 요소만 추출하여 반환하도록
type StringS<T> = T extends string ? T : never;
type Test1 = StringS<"a" | 1 | false>;
type Test2 = StringS<1 | 2 | 3>;
type Test3 = StringS<string | boolean | number>;
