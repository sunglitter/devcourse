// function callback() {
//     console.log("콜백 함수가 호출됨");
// }

// setTimeout(callback, 1000);
// console.log("작업을 수행함");

// function getUsers(callback) {
//     setTimeout(() => {
//         const users = [
//             { name: "Kim", email: "kim@gmail.com" },
//             { name: "Lee", email: "lee@gmail.com" },
//             { name: "Park", email: "park@gmail.com" },
//         ];
//         callback(users);
//     }, 1000);
// }

// function findUser(name, callback) {
//     getUsers((users) => {
//         const user = users.find((user) => user.name === name);
//         callback(user);
//     });
// }

// let user = findUser("Kim", (user) => {
//     console.log(user.name);
// });

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", sayHello);

// function sayHello() {
//     alert("안녕하세요");
// }

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Kim", email: "kim@gmail.com"},
//                 { name: "Lee", email: "lee@gmail.com"},
//                 { name: "Park", email: "park@gmail.com"},
//             ]);
//         }, 1000);
//     });
// }

// let promise = getUsers();
// promise.then(users => console.log(users));

// let success = false;

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve([
//                     { name: "Kim", email: "kim@gmail.com"},
//                     { name: "Lee", email: "lee@gmail.com"},
//                     { name: "Park", email: "park@gmail.com"},
//                 ]);
//             }, 1000);
//         } else {
//             reject("실패");
//         }
//     });
// }

// let promise = getUsers();
// // promise.then(
// //     (users) => console.log(users),
// //     (error) => console.log(error)
// // );
// promise
//     .then((users) => console.log(users))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("작업완료"));

// let success = true;

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve([
//                     { name: "Kim", email: "kim@gmail.com"},
//                     { name: "Lee", email: "lee@gmail.com"},
//                     { name: "Park", email: "park@gmail.com"},
//                 ]);
//             }, 1000);
//         } else {
//             reject("실패");
//         }
//     });
// }

// let promise = getUsers();
// promise
//     .then((users) => users.find((user) => user.name === "Kim"))
//     .then((users) => console.log(users.email))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("작업완료"));

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// // const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("실패함"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000));
// let promises = [p1, p2, p3]

// Promise.all(promises)
// .then(results => {
//     const total = results.reduce((s, r) => s + r);
//     console.log(`결과: ${results}`);
//     console.log(`합계: ${total}`);
// });

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000));

// let promises = [p1, p2, p3];

// Promise.allSettled(promises).then((results) => {
//     const fulfilledResults = results
//         .filter((result) => result.status === "fulfilled")
//         .map((result) => result.value);
//     const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
//     console.log(`결과: ${fulfilledResults}`);
//     console.log(`합계: ${total}`);
// })

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { name: "Kim", email: "kim@gmail.com"},
//                 { name: "Lee", email: "lee@gmail.com"},
//                 { name: "Park", email: "park@gmail.com"},
//             ]);
//         }, 2000);
//     });
// }

// function findUser(users) {
//     return new Promise((resolve, reject) => {
//         console.log(users);
//         setTimeout(() => {
//             resolve(users.find((user) => user.name === "Kim"));
//         }, 1000);
//     });
// }

// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         console.log(user);
//         setTimeout(() => {
//             resolve(user.email);
//         }, 3000);
//     });
// }

// getUsers()
//     .then(findUser)
//     .then(getEmail)
//     .then(console.log("작업 완료 순차 promise"));

// // 예제 2 강사 답안
// const promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("A");
//     }, 1000);
// });
// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("B");
//     }, 2000)
// });
// let promises = [promiseA, promiseB];
// Promise.all(promises).then((results) => {
//     console.log("완료");
// });

// // 예제 3 스스로 풀이
// const five = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//         reject("에러!")
//     }, 1000);
// });
// const multiTen = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(five * 10)
//     }, 1500);
// });
// let promises = [five, multiTen];
// Promise.allSettled(promises).then((result) => {
//     console.log(result)
// }) // 성공..?

// // 예제 3 강사 답안
// let success = true;
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (success) {
//             resolve(5);
//         } else {
//             reject("에러!");
//         }
//     }, 1000)
// });

// promise
//     .then((num) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(num * 10);
//             }, 1500);
//         });
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// async function sayHello() {
//     return "안녕";
// }

// sayHello().then(console.log);

// // 함수 표현식
// let sayHello = async function () {
//     return "안녕2";
// }
// sayHello().then(console.log);

// // 화살표 함수
// let sayHello = async () => "안녕3";
// sayHello().then(console.log);

// class Greeter {
//     async sayHello() {
//         return "안녕4"
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello().then(console.log);

// async function sayHello() {
//     return Promise.resolve("안녕5");
// }
// sayHello().then(console.log);

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("안녕6"), 1000);
//     })
// }
// sayHello().then(console.log);

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("안녕6"), 1000);
//     })
// }

// async function display() {
//     let result = await sayHello();
//     console.log(result);
// }
// display();

// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("거부"), 1000);
//     })
// }

// async function display() {
//     try{
//         let result = await sayHello();
//         console.log(result);
//     }catch(e) {
//         console.log(e);
//     }
// }
// display();

// function getUser() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([
//           { name: "KIM", email: "kim@gmail.com" },
//           { name: "LEE", email: "lee@gmail.com" },
//           { name: "PARK", email: "park@gmail.com" },
//         ]);
//       }, 2000);
//     });
//   }
  
//   function findUser(users) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(users.find((user) => user.name === "KIM"));
//       });
//     });
//   }
  
//   function getEmail(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(user.email);
//       }, 3000);
//     });
//   }
  
//   async function getUserEmail(name) {
//     let users = await getUser();
//     let user = await findUser(users, name);
//     let email = await getEmail(user);
//     return email;
//   }
  
//   async function displayUserEmail() {
//     let email = await getUserEmail("KIM");
//     console.log(email);
//   }
  
//   displayUserEmail();
  
// const myPromise = () => new Promise((resolve) => {
//     //resolve 됐을 때 나올 값
//     resolve("value is");
// });
  
// function* gen() {
//     //myPromise의 결과값을 then으로 받아와서(data) data가 들어오면 result = data로 해준다
//     yield myPromise().then((data) => { result = data });
//     yield result + "1";
// }
  
// //gen()함수 호출
// const asyncFunc = gen();
  
// const val1 = asyncFunc.next();
// console.log(val1);

// const myPromise = () =>
//     new Promise((resolve) => {
//       //resolve 됐을 때 나올 값
//       resolve("value is");
//     });
  
//   function* gen() {
//     //myPromise의 결과값을 then으로 받아와서(data) data가 들어오면 result = data로 해준다
//     yield myPromise().then((data) => {
//       result = data;
//     });
//     yield result + "1";
//   }
  
//   //gen()함수 호출
//   const asyncFunc = gen();
  
//   const val1 = asyncFunc.next();
//   console.log(val1);
  
//   val1.value.then(() => {
//     console.log(asyncFunc.next());
//   });


// function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
//     let next = from;
//     while (next <= to) {
//       yield new Promise((resolve, reject) => {
//         setTimeout(() => resolve(next), timeout);
//         //4부터 시작하는 이유
//         next += interval;
//       });
//     }
//   }
//   (async () => {
//     let seq = asyncSequence(2, 10, 2);
//     for await (let value of seq) console.log(value);
//   })();
  
// function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
//     let next = from;
//     while (next <= to) {
//       yield new Promise((resolve, reject) => {
//         setTimeout(() => resolve(next), timeout);
//       });
//       //위치 수정
//       next += interval;
//     }
//   }
//   (async () => {
//     let seq = asyncSequence(2, 10, 2);
//     for await (let value of seq) console.log(value);
//   })();

// //예제4. 프로미스로 만들어주고, 실행되는 함수를 하나 만들어주고, 기다렸다가 함수 뿌려주고 이 과정을 자동으로 만들면되겠죠?
// function* taskGenerator() {
//     yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve("2완료"), 2000));
//     yield new Promise((resolve) => setTimeout(() => resolve("3완료"), 2000));
//   }
  
//   const tasksDisplay = async () => {
//     //tasks를 만들고 호출해줍니다
//     const tasks = taskGenerator();
//     //for문으로 하나씩 출력하니깐 기다려줘야겠죠? await를 넣어서 기다려줍니다(짝꿍이 async 도 적어줍니다)
//     for (let task of tasks) {
//       const result = await task;
//       console.log(result);
//     }
//   };
  
//   //만든 tasksDisplay 호출
//   tasksDisplay();

// function userData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = {
//                 1: { name: "Kim", age: 25 },
//                 2: { name: "Lee", age: 30 },
//                 3: { name: "Jung", age: 35 },
//             };
//             const user = users[userId];
//             if (user) {
//                 resolve(user);
//             } else {
//                 reject("사용자를 찾을 수 없습니다.");
//             }
//         }, 1000);
//     });
// }

// async function getUser(userId) {
//     try {
//         const userDataGet = await userData(userId);
//         console.log(`${userDataGet.name}, ${userDataGet.age}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUser(1);