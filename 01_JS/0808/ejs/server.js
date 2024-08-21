const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(expressLayouts);
app.use(express.static('public'));

const users2 = [
    {name: 'kim', age:17, role: 'front'},
    {name: 'lee', age:25, role: 'back'},
    {name: 'park', age:30, role: 'full'},
    {name: 'choi', age:16, role: 'front'},
]


let tasks = [];
app.post('/addTask', (req, res) => {
    const newTask = req.body.newTask;
    if(newTask){
        tasks.push(newTask);
    }
    res.redirect('/');
})
app.post('/deleteTask', (req, res) => {
    const deleteTask = req.body.task;
    tasks = tasks.filter(task => task !== deleteTask);
    res.redirect('/');
})

app.get('/', (req, res)=> {
    const data = {message: 'hello world'};
    res.render('index', {
        tasks: tasks,
        data,
        users2,
        people: [
            {name: 'kim'},
            {name: 'lee'},
            {name: 'park'},
        ]
    
    });
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/submit', (req, res)=> {
    const {name, email} = req.body;
    res.render('result', { name, email})
})


app.listen(8000, () => {
    console.log("서버연결 http://localhost:8000");
})