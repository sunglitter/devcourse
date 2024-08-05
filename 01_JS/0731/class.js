//클래스
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype ={
//     toString:function(){
//         return `(${this.x},${this.y})`
//     },
// };
// let pt1 = new Point(10,20);
// let pt2 = new Point(100,200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// // pt은 Point의 인스턴스가 맞는지 확인
// console.log(pt1 instanceof Point); // true
// console.log(pt2 instanceof Point); // true

// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function () {
//       return Math.PI * this.radius ** 2;
//     };
//   }
  
//   //인스턴스 생성
//   const circle1 = new Circle(1);
//   const circle2 = new Circle(1);
//   console.log(circle1.getArea === circle2.getArea); //false 출력, 즉 같은 메소드는 공유하고 있지 않다는 의미

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// // 인스턴스 생성
// const circle1 = new Circle(1);
// const circle2 = new Circle(1);
// console.log(circle1.getArea === circle2.getArea);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi${this.name}`);
//   }
//   static sayHello() {
//     console.log("Hello");
//   }
// }
// const me = new Person("Lee");
// me.sayHi();
// Person.sayHello();

// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log("Hi " + this.name);
//   };

//   Person.sayHello = function () {
//     console.log("Hello!");
//   };

//   return Person;
// })();

// const me = new Person("Lee");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

//메서드

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// // 정적 메서드
//   static areas(width,height){
//     return width * height
//   }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20,10));

// const Person = {
//   firstName: "Minji",
//   lastName: "Choi",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

// console.log(Person.fullName);

//public /private

// class Person {
//   #name = "";

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name.trim();
//   }
// }

// const me = new Person("Lee");
// console.log(me.name);

//상속에 대한 확장
//super 함수처럼 호출가능하고 this같이 식별자 처럼 참조가능
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle("자전거", 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicycle("오토바이", 2);
// console.log(myBicycle);

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car("벤츠", 4, true);
// console.log(myCar);

// class Base {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `Hi${this.name}. 잘지내니?`;
//   }
// }
// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}`; //sayHi호출
//   }
// }
// const derived = new Derived("Lee");
// console.log(derived.sayHi());

//문제
//Book이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하고
//(title.author.price)생성할 프로토 타입 예) 출판일,페이지 수

// function Book(title, author, price) {
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }

// // 프로토타입으로 프로퍼티 추가하기
// Book.prototype.year = "1999";
// Book.prototype.page = 700;

// class Book {
//     constructor(title, author, price) {
//       this.title = title;
//       this.author = author;
//       this.price = price;
//     }
//   }
//   Book.prototype.bookDate = "";
//   Book.prototype.page = 200;
  
//   const myBook = new Book("책: 책", "목차", 250);
//   myBook.bookDate = "2024-07-31";
//   myBook.pageCount = 0;
  
//   console.log(
//     `Book: ${myBook.title},${myBook.author},${myBook.price},${myBook.bookDate},${myBook.page}`
//   );

// 예제 3 스스로 풀이
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     text() {
//         console.log(`안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`)
//     }
// }
// const me = new Person('Kim', 33);
// console.log(me.text())

// // 예제 3 FT 답안
// //class 키워드를 사용해서 Person class를 만든다, 클래스를 만들때는 첫글자는 대문자~!
// class Person {
// 	//객체를 만들기 위한 생성자 메소드이고, 이 메소드는 name, age 2개의 매개변수를 받음
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   //call() 메소드를 정의
//   call() {
// 	  //만들어진 객체(this)의 name , age를 참조한다 
//     return `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다`;
//   }
// }

// //new 키워드로 객체를 생성하는데, 이때 Person class를 의 객체가 생성된다.
// const person1 = new Person("유재석", 50);
// const person2 = new Person("박명수", 40);
// 	//person1객체의 call()메소드를 호출
// console.log(person1.call());
// console.log(person2.call());

// // 예제 3 강사 답안
// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     textIntroduce() {
//         return `안녕하세요. 제 이름은 ${this.name}이고, 나이는 ${this.age}살 입니다.`
//     }
// }
// const person1 = new Person('최민지', 20);
// console.log(person1.textIntroduce());


// // 예제 1 스스로 풀이
// class Calculator {
//     static plus(num1, num2) {
//         return num1 + num2;
//     }
//     static minus(num1, num2) {
//         return num1 - num2;
//     }
// }
// console.log(Calculator.plus(1, 2));
// console.log(Calculator.minus(5, 3));

// // 예제 1 강사 답안

// // class 방식

// class Calculator {
//     static add(a, b){
//         return a + b;
//     }
//     static subtract(a, b){
//         return a - b;
//     }   
// }
// console.log(Calculator.add(1, 3));
// console.log(Calculator.subtract(1, 3));


// // 생성자 함수 방식

// function Calculator() {}

// Calculator.add = function(a, b){
//     return a + b;
// }
// Calculator.subtract = function(a, b){
//     return a - b;
// }

// console.log(Calculator.add(2, 5));
// console.log(Calculator.subtract(2, 5));