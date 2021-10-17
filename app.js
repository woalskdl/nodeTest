const express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello node');
});

app.listen(4000, () => {
    console.log('4000번 포트 실행')
});

app.get('/main', (req, res) => {
    console.log("들어옴");
    res.sendFile(__dirname + "/public/main.html");
});

// app.post('/search', (req, res) => {
//     console.log(req.body.keyword);
//     // res.send("<h1>welcome! <br/> " + req.body.email + "</h1>");
//     res.render('search.ejs', {'keyword' : req.body.keyword})
// });

app.post('/ajax_search', (req, res) => {
    console.log('ajax started');

    let resData = {'result' : 'ok', 'keyword' : req.body.keyword};
    res.json(resData);
})