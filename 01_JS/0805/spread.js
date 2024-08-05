// function foo(...rest){
//     console.log(rest);
// }
// foo(...[1, 2, 3]);

// let arr3 = [1, 4];
// let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);

// arr3.splice(1, 0, ...arr4);
// console.log(arr3);

// const origin = [1, 2];
// // const copy = origin.slice();
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// const obj = {x: 1, y: 2};
// const copy = {...obj};
// console.log(copy)
// console.log(obj === copy);

// const merged = {x: 1, y: 2, ...{a: 3, b: 4}};
// console.log(merged);

// const merged = Object.assign({}, {x: 1, y: 2}, {y: 3, x: 3});
// console.log(merged);

// const merged = {...{x: 1, y: 2}, ...{y: 3, x: 3}};
// console.log(merged);

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);
// const [a, b] = [1, 2]
// console.log(a, b);

// const [c, d] = [1];
// console.log(c, d);

// const user = {firstName: 'Dongsung', lastName: 'Kim'};
// const {lastName, firstName} = user;
// console.log(lastName, firstName);

// function printTodo({content, completed}){
//     console.log(`할일 ${content}는 ${completed ? '완료' : '비완료'} 상태입니다.`)
// };
// printTodo({id: 1, content: "HTML", completed: true});

// const user = {
//     name: 'Lee',
//     address: {
//         zipcode: '03068',
//         city: 'Seoul',
//     },
// }
// const {address: { city }} = user;
// console.log(city);

// 문제 : 객체 person을 만들고 name과 age를 구조 분해 할당하여 변수 userName과 userAge에 각각 저장한 후,
// 두 변수를 활용하여 아래와 같은 형식의 문자열을 출력하는 코드를 작성하세요.
// console.log(`이름: ${userName}, 나이: ${userAge}`);

// const person = {
//     name: "Kim",
//     age: 33,
//     };
//     const {name: userName, age: userAge} = person;
// console.log(`이름: ${userName}, 나이: ${userAge}`);

// 문제 2 : 다음 객체 car를 스프레드 연산자를 사용하여 복사하고, model을 "전기차"로 수정한 새로운 객체 newCar를 생성하는 코드를 작성하세요
// const car = { brand: "현대", model: "아이오닉", year: 2023};
// const newCar = {...car, model: "전기차"};
// console.log(newCar)
// const car = { brand: "현대", model: "아이오닉", year: 2023 };
// const newCar = {...car, model: "전기차"}
// console.log(newCar)


// 문제 3 : 다음 두 배열 array1과 array2를 스프레드 연산자를 사용하여 하나의 배열로 합친 후, 중복된 값을 제거한 배열을 출력하는 코드를 작성하세요
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const array3 = [...array1, ...array2];
// const array4 = [...new Set(array3)];
// console.log(array4);
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// const arr = [...new Set([...array1, ...array2])]
// console.log(arr);