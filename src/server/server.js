const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// server port 
const PORT =3000;

// instance
const app = express();

// handle JSON
app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res){
    res.send('Express server working fine');
})

app.post('/postdata',function(req,res){
console.log(req.body);
res.status(200).send({"message":"Data received successfully"});
})


app.listen(PORT, function(){
    console.log("Server running on localhost :" + PORT)
});

