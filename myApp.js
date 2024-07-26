let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));



app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});


app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res){ 
    res.json({ time: req.time})
});







app.get('/json', function(req, res){
    const data = {
        "message": "Hello json"
    };
    res.json(data);
});







app.get('/', function(req, res){
    const filePath = __dirname + '/views/index.html';
    console.log(filePath);
    res.sendFile(filePath);
});































 module.exports = app;
