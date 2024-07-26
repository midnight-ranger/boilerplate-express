let express = require('express');
const res = require('express/lib/response');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));



app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
});


app.get('/json', function(req, res){
    const data = {
        "message": "Hello json"
    };
    res.json(data);
});



app.get('/', function(req, res){
    const filePath = __dirname + '/view/index.html';
    console.log(filePath);
    res.sendFile(filePath);
});































 module.exports = app;
