// //document에서 "div"태그를 찾아서 let div 의 변수 div에 넣는다
// let div = document.querySelector("div");
// //넣은 값이 잘 들어왔는지 console.log 로 확인
// console.log(div);

// function changeContent() {
//   div.outerHTML = "<h1>DOM API</h1><p>선수조건 :없음</p>";
// }

// const ele = document.getElementById('banana');
// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red'});

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach(elems => {elems.style.color = "red"});

// const apple = document.getElementsByClassName('fruit apple');
// [...apple].forEach(apple => {apple.style.color = "blue"});

// const boxEl = document.querySelector('.box');
// boxEl.addEventListener('click', function() {
//     console.log('Click!');
//     // if(boxEl.classList.contains('active')) {
//     //     boxEl.classList.remove('active');
//     // } else {
//     //     boxEl.classList.add('active');
//     // }
//     boxEl.classList.toggle('active');
// })

// const boxEls = document.querySelectorAll('.box');
// boxEls.forEach(function(boxEl, index){
//     boxEl.classList.add(`order-${index + 1}`);

// })

// const div = document.getElementById('my_div');
// const clearbtn = document.getElementById('clearbtn');
// const result = document.getElementById('result');

// div.addEventListener('click', (event) => {
//     result.innerHTML+='<div>click</div>';
// });
// div.addEventListener('mousedown', (event) => {
//     result.innerHTML+='<div>mousedown</div>';
// });
// div.addEventListener('mouseup', (event) => {
//     result.innerHTML+='<div>mouseup</div>';
// });
// clearbtn.addEventListener('click', (event) => {
//     result.innerHTML="";
// });

// function sayHi(name){
//     console.log(`Hi ${name}`)
// }

// const button = document.querySelector('button');
// // button.onclick = function () {
// //     console.log('button clicked 1')
// // }
// // button.addEventListener('click', function() {
// //     console.log('button clicked 1');
// // });
// // button.addEventListener('click', function() {
// //     console.log('button clicked 2');
// // });
// const handleClick = () => console.log('button Click');
// // button.addEventListener('click', handleClick);
// // button.addEventListener('click', handleClick);
// button.onclick = handleClick;
// button.removeEventListener('click', handleClick);
// // button.addEventListener('click', function add(){
// //     console.log('click!')
// //     button.removeEventListener('click', add);
// // });
// button.onclick = null;

// const msg = document.querySelector('.message');

// function showCoords(e){
//     msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`
// }
// // document.onclick = showCoords

// const fruits = document.getElementById('fruits');
// function activate({target}) {
//     if(!target.matches('#fruits > li')) return;
//     [...fruits.children].forEach(fruit => {
//         fruit.classList.toggle('active', fruit === target)
//     })
// }
// fruits.onclick = activate;
// document.getElementById('apple').onclick = activate;
// document.getElementById('banana').onclick = activate;
// document.getElementById('cherry').onclick = activate;

// 예제 1 스스로 풀이
// const todoList = document.getElementById('todo');
// function activate({target}) {
//     if(!target.matches('#todos > li')) return;
//     [...todos.children].forEach(todo => {
//         todo.classList.toggle('active', todo === target)
//     })
// }
// todos.onclick = activate; // 실패...

// // 예제 1 강사 답안
// const buttons = document.querySelectorAll(".check");
// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         button.classList.toggle('active')
//     })
// })

// const box = document.querySelector(".box");
// const initialMousePos = {x: 0, y: 0};
// const offset = {x: 0, y: 0};

// const move = (e) => {
//     offset.x = e.clientX - initialMousePos.x;
//     offset.y = e.clientY - initialMousePos.y;
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
// };

// box.addEventListener('mousedown', (e) => {
//     initialMousePos.x = e.clientX - offset.x;
//     initialMousePos.y = e.clientY - offset.y;

//     document.addEventListener('click', move);
// })

// document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', move);
// })

// const box = document.querySelector(".box");
// const offset = {x: 0, y: 0};

// document.addEventListener('click', e => {

//     const boxWidth = box.offsetWidth;
//     const boxHeight = box.offsetHeight;

//     const newX = e.clientX - boxWidth / 2
//     const newY = e.clientY - boxHeight / 2
//     offset.x = newX;
//     offset.y = newY;
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`
// });

