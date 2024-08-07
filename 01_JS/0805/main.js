import _ from 'lodash'
// import cube from './modules.js'
// import * as R from './modules.js'
// import myData from './myData.json'
import axios from 'axios'

// console.log(myData);
// const user = {
//     name: "mingss",
//     age: 20,
//     emails: [
//         'designmj@gmail.com',
//         'kim@gmail.com'
//     ]
// }
// console.log(user);
// const str = JSON.stringify(user);
// console.log(str)
// const obj = JSON.parse(str);
// console.log(obj)

// localStorage.setItem('user', JSON.stringify(user));
// console.log(localStorage.getItem('user'));
// console.log(JSON.parse(localStorage.getItem('user')));
// const str = localStorage.getItem('user');
// const obj = JSON.parse(str);
// obj.age = 22;
// console.log(obj);
// localStorage.setItem('user', JSON.stringify(obj));


// console.log(cube(2, 4))
// console.log(R.arrs);
// console.log(R.getName());
// const user = {
//     name : "Dongsung",
//     age : 33,
//     email : ['kds0284@gmail.com']
// }
// const copyUser = user;
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = Object.assign({}, user);
// console.log(user === copyUser);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// const copyUser = {...user}
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kds0284@naver.com')
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 20;
// console.log(user);
// console.log(copyUser);

// user.email.push('kds0284@naver.com');
// console.log(user.email === copyUser.email);
// console.log(user);
// console.log(copyUser);

// const userA = [
//     {userId: '1', name: "mingss"},
//     {userId: '2', name: "kim"},
// ]

// const userB = [
//     {userId: '1', name: "Dongsung"},
//     {userId: '3', name: "Koh"},
// ]

// const userC = userA.concat(userB);
// console.log(userC);
// console.log(_.uniqBy(userC, 'userId'));

// const userD = _.unionBy(userA, userB, 'userId');
// console.log(userD);

// const users = [
//     {userId: '1', name: 'Dongsung'},
//     {userId: '2', name: 'kim'},
//     {userId: '3', name: 'lee'},
//     {userId: '4', name: 'park'}
// ]

// const foundUser = _.find(users, {name: 'lee'});
// console.log(foundUser);
// const foundUserIndex = _.findIndex(users, {name: 'lee'});
// console.log(foundUserIndex);
// _.remove(users, {name: 'Dongsung'});
// console.log(users);

// let array = [1, 2, 3, 4]
// let evens = _.remove(array, function(n){
//     return n % 2 === 0
// })

// console.log(array);
// console.log(evens);

// let myFriend = [
//     {name: 'Kim', active: false},
//     {name: 'Lee', active: false},
// ]
// console.log(_.every(myFriend, {name: 'kim', active: false}));
// console.log(_.every(myFriend, ['active', false]));
// console.log(_.every(myFriend, 'active'));

// let mySister = [
//     {name: 'kim', age: 22, city: 'Seoul'},
//     {name: 'lee', age: 22, city: 'Daegu'},
//     {name: 'park', age: 23, city: 'Busan'},
//     {name: 'you', age: 24, city: 'Seoul'},
// ]
// console.log(_.filter(mySister, {age: 22, name: 'kim'}));
// console.log(_.filter(mySister, sister => sister.age === 22));


// function getMovies(inputText) {
//     axios
//     .get(`https://www.omdbapi.com/?apikey=bcb8bfc2&s=${inputText}`)
//     .then((response) => {
//         console.log(response);
//         const h1El = document.querySelector('h1');
//         const imgEl = document.querySelector('img');
//         const yearEl = document.getElementById('year');
//         const typeEl = document.getElementById('type')
//         h1El.textContent = response.data.Search[0].Title
//         imgEl.src = response.data.Search[0].Poster
//         yearEl.textContent = response.data.Search[0].Year
//         typeEl.textContent = response.data.Search[0].Type
//     })
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const inputEl = document.getElementById('search');
//     const clickBtn = document.getElementById('click');

//     clickBtn.addEventListener('click', () => {
//         const inputText = inputEl.value;
//         getMovies(inputText);
//     });
// });

// 영화 검색창을 추가해서 연동시키는 기능까지 포함된 것을 어떻게 구현할지 시도해보기 => 하긴 했음

// 강사님 방식

function getMovies(title = 'hello') {
    axios
    .get(`https://www.omdbapi.com/?apikey=bcb8bfc2&s=${title}`)
    .then((response) => {
        console.log(response);
        const results = document.getElementById('results');
        results.innerHTML = '';

        if(response.data.Search && response.data.Search.length > 0){
            const movies = response.data.Search.slice(0, 10);
            movies.forEach((movie) => {
                const movieEl = document.createElement('div');
                const h1El = document.createElement('h1');
                const imgEl = document.createElement('img');
                const yearEl = document.createElement('p');
                const typeEl = document.createElement('p');

                h1El.textContent = movie.Title;
                imgEl.src = movie.Poster;
                yearEl.textContent = movie.Year;
                typeEl.textContent = movie.Type;

                movieEl.appendChild(h1El);
                movieEl.appendChild(imgEl);
                movieEl.appendChild(yearEl);
                movieEl.appendChild(typeEl);
                results.appendChild(movieEl);
            })

        }else{
            alert('No results found');
        }
    })
}
getMovies();
document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    if(searchInput.trim() !== ''){
        getMovies(searchInput);
    }else{
        alert('영화 제목을 입력해주세요!');
    }
})

// 자전거 지도 만들기
// const API_KEY = "";
// async function getData() {
//     const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/10/`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const locations = data.rentBikeStatus.row.map(spot => [spot.stationName, spot.stationLatitude,
//         spot.stationLongitude, spot.parkingBikeTotCnt])
//     console.log(data);
//     console.log("locations", locations)
//     drawMap(locations);
// }
// getData();

// function drawMap(locations){
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 15,
//         center: new google.maps.LatLng(locations[0][1], locations[0][2]),
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//     });

//     const infowindow = new google.maps.InfoWindow();
//     locations.forEach((location, i) => {
//         const marker = new google.maps.Marker({
//             position: new google.maps.LatLng(location[1], location[2]),
//             map: map,
//             title: location[0]
//         });
        
//         marker.addListener("click", () => {
//             infowindow.setContent(location[3]);
//             infowindow.open(map, marker);
//         });
//     });

// }