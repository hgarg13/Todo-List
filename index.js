var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");
    
var todoRoutes = require("./routes/todos"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'))

app.get('/', function(req, res){
//   res.send('Hi There!! From Express'); 
    // res.send({message: "Hi from JS object"})
    // res.json({message: "Hi from JS object"})
    // res.send('Hello from root route');
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function(){
    console.log('App is running on port: ' + process.env.PORT);
})