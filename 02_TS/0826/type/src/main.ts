// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }
// add("hello", "world");
// add(1, 1);

// function exam(param: string): string;
// function exam(param: string | null): number;
// function exam(param: string | null): string | number {
//     if(param) {
//         return 'string';
//     } else {
//         return 123;
//     }
// }

// const result = exam('what');

// interface Add {
//   (x: number, y: number): number;
//   (x: string, y: string): string;
// }

// const add: Add = (x: any, b: any) => x + y;

// add(1, 2);
// add("1", "2");
// add("1", 2);
// add(1, "2");

// type Add1 = (x: number, y: number) => number;
// type Add2 = (x: string, y: string) => string;
// type Add = Add1 & Add2;
// const add: Add = (x: any, y: any) => x + y;

// add(1, 2);
// add('1', '2');
// add(1, '2');
// add('1', 2);

// function sayS(word: string): string;
// function sayS(word: string[]): string;
// function sayS(word: any): any {
//   if (typeof word === "string") {
//     return word;
//   } else if (Array.isArray(word)) {
//     return word.join("");
//   }
//   throw new Error("unable to say something");
// }
// sayS(["hello", "world"]);

// enum Level {
//   NOVICE = 3,
//   INTERMEDIATE,
//   ADVANCED = 7,
//   MASTER,
// }

// enum Level {
//   NOVICE,
//   INTERMEDIATE = 'hello',
//   ADVANCED = 'world',
//   MASTER = 'hi',
// }

// const a = Level.NOVICE; // 0
// const b = Level[Level.NOVICE]; // NOVICE

// enum Level {
//   NOVICE,
//   INTERMEDIATE,
//   ADVANCED,
//   MASTER,
// }
// function yourLevel(level: Level) {
//   console.log(Level[level]);
// }
// const mylevel = Level.ADVANCED;
// yourLevel(mylevel); // ADVANCED

// type El<T> = T extends (infer E)[] ? E : never;
// type Str = El<string[]>;
// type NumBool = El<(number | boolean)[]>;

// type ElementType<T> = T extends (infer E)[] ? E : never;
// type numArray = number[];
// type Ele = ElementType<numArray>;

// type Rec = {
//   name: string;
//   children: Rec[];
// };
// const rec1: Rec = {
//   name: "test",
//   children: [],
// };
// const rec2: Rec = {
//   name: "test",
//   children: [
//     { name: "test2", children: [] },
//     { name: "test3", children: [] },
//   ],
// };

// 문제 12. removeD 메서드를 구현하세요. 이 메서드는 배열의 중복된 요소를 제거하고, 중복이 제거된 새로운 배열을 반환해야 합니다.
// 제네릭을 사용하여 다양한 타입의 배열에 대해 작동할 수 있도록 만드세요.

// function removeD<T>(arr: T[]): T[] {
//   return Array.from(new Set(arr));
// }
// const arr1 = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8]
// console.log(removeD(arr1))

// 문제 13. 배열의 길이를 반환하거나, 문자열의 길이를 반환하는 오버로딩 함수를 작성하세요.

// function getLen(arr: number[]): number;
// function getLen(arr: string[]): number;
// function getLen(arr: any): number {
//   return arr.length;
// }
// const arr1 = getLen([1, 1, 2, 3, 4, 5]);
// console.log(arr1);
// const arr2 = getLen(['a', 'a', 'b']);
// console.log(arr2)

// class Person {
//   name: string;
//   married: boolean;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const Person = class {
//   name: string;
//   age: number;
//   married: boolean;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//   }
// }

// interface Human {
//   name: string;
//   age: number;
//   married: boolean;
//   sayName(): void;
// }

// class Person implements Human {
//   name;
//   age;
//   married;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//   }
// }

// interface PersonInterface {
// 	name: string;
// 	age: number;
// 	married: boolean;
// }
// function Person(this: PersonInterface, name: string, age: number, married: boolean) {
// 	this.name = name;
// 	this.age = age;
// 	this.married = married;
// }
// new Person('zero', 28, false);

// class Parent {
//   name?: string;
//   readonly age: number;
//   protected married: boolean;
//   private value: number;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//     this.value = 0;
//   }
//   changeAge(age: number) {
//     this.age = age;
//   }
// }
// class Child extends Parent {
//   constructor(name: string, age: number, married: boolean) {
//     super(name, age, married);
//   }
//   sayName() {
//     console.log(this.name);
//   }
//   sayMarried() {
//     console.log(this.married);
//   }
//   sayValue() {
//     console.log(this.value);
//   }
// }
// const child = new Child("kim", 25, false);
// child.name;
// child.married;
// child.value;

// interface Human {
//   name: string;
//   age: number;
//   married: boolean;
// }

// class Person implements Human {
//   name;
//   protected age;
//   married;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//   }
// }

// // "noImplicitOverride": true 체크
// class Human {
//   play() {
//     console.log("play");
//   }
//   study() {
//     console.log("study");
//   }
// }
// class Employee extends Human {
//   work() {
//     console.log("work");
//   }
//   override study() {
//     console.log("study2");
//   }
// }

// class Signature {
//   [propName: string]: string | number | undefined;
//   static[propName: string]: boolean;
// }
// const sig = new Signature();
// sig.hello = 'world';
// Signature.isGood = true;

// class Person {
//   name: string;
//   age: number;
//   married: boolean;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//   }
//   sayAge() {
//     console.log(this.age)
//   }
//   sayMarried(this: Person) {
//     console.log(this.married)
//   }
//   sayCallback(callback: (this: this) => void) {
//     callback.call(this);
//   }
// }

// value: number = 0;
// sayAge(): void {
//   console.log(this.age);
// }
// sayMarried(): void {
//   console.log(this.married);
// }
// abstract class Person {
//   name: string;
//   age: number;
//   married: boolean;
//   abstract value: number;
//   constructor(name: string, age: number, married: boolean) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
//   }
//   changeAge(age: number) {
//     this.age = age;
//   }
//   abstract sayAge(): void;
//   abstract sayMarried(): void;
// }
// class RealPerson extends Person {
//   value: number = 0;
//   sayAge(): void {
//     console.log(this.age);
//   }
//   sayMarried(): void {
//     console.log(this.married);
//   }
// }

// 문제 14: FirstElement 라는 조건부 타입을 정의하세요. 이 타입은 튜플 타입을 인자로 받아, 첫 번째 요소의 타입을 추츨해야 합니다.
// infer 키워드를 사용하여 이 타입을 구현하고, 이를 사용해 튜플의 첫 번째 요소 타입을 추출하는 예제를 작성하세요.

// type FirstElement<T> = T extends [infer E, ...any[]]? E : never;
// type Tuple1 = [string, number, boolean];
// type Fir1 = FirstElement<Tuple1>

// 문제 15: 다음 요구 사항을 충족하는 Animal 클래스를 작성하십시오.
// 클래스 정의: Animal 이라는 이름의 클래스를 정의합니다.
// 속성: name: 문자열 타입으로, private 접근 제어자로 설정합니다.
// age: 숫자 타입으로, protected 접근 제어자로 설정합니다.
// 생성자: name과 age를 초기화하는 생성자를 만듭니다.
// 메서드: getName(): private 속성인 name을 반환하는 메서드입니다.
// getAge(): protected 속성인 age를 반환하는 메서드입니다.
// 서브클래스: Dog라는 이름의 서브클래스를 정의합니다.
// Animal 클래스를 상속받습니다.
// breed: 문자열 타입의 속성을 추가합니다.
// 생성자에서 name, age, breed를 초기화합니다.
// bark(): "Woof!"라는 문자열을 반환하는 메서드를 구현합니다.

// class Animal {
//   private name: string;
//   protected age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   getName(): string {
//     return this.name;
//   }
//   getAge(): number {
//     return this.age;
//   }
// }
// class Dog extends Animal {
//   breed: string;
//   constructor(name: string, age: number, breed: string) {
//     super(name, age);
//     this.breed = breed;
//   }
//   bark(): string {
//     return "Woof!";
//   }
// }

// interface Address {
//   email: string;
//   address: string;
// }
// const me: Partial<Address> = {};
// const you: Partial<Address> = {email: 'abc@abc.com'}
// const all: Address = {email: 'abc@abc.com', address: 'abc'}

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }
// type TodoPreview = Pick<Todo, "title" | "completed">;
// const todo: TodoPreview = {
//     title: "Clean Room",
//     completed: false,
// }

// interface Todo{
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }
// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//     title: "Clean Room",
//     completed: false,
//     createdAt: 12345
// }

// type User = {
//   firstName: string;
//   lastName?: string;
// };
// const firstUser: User = {
//   firstName: "mingss",
// };
// const secondUser: Required<User> = {
//   firstName: "mongss",
//   lastName: "kim",
// };

// interface Cat {
//   age: number;
//   breed: string;
// }
// type CatName = "a" | "b" | "c";
// const cats: Record<CatName, Cat> = {
//   a: { age: 10, breed: "B" },
//   b: { age: 10, breed: "B" },
//   c: { age: 10, breed: "B" },
// };

// type T0 = ReturnType<() => string>
// type T1 = ReturnType<(s: string) => void>

// function fn(str: string){
//     return str;
// }

// const a: ReturnType<typeof fn> = "Hello";
// const b: ReturnType<typeof fn> = 123;

type Users = "kim" | "lee" | "park";
type UserName = { [K in Users]: string };
const userNameInfo: UserName = {
  kim: "kim",
  lee: "lee",
  park: "park",
};
type UserAge = { [K in Users]: number };
const userAgeInfo: UserAge = {
  kim: 1,
  lee: 2,
  park: 3,
};
