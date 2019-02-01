const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
// server port 
const PORT =3000;
// handle JSON
app.use(bodyParser.json());

app.use(cors());

// app.get('/', function(req,res){
//     res.send('Express server working fine');
// })
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-forms'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angular-forms/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
app.post('/postdata',function(req,res){
console.log(req.body);
res.status(200).send({"message":"Data received successfully"});
})


app.listen(PORT, function(){
    console.log("Server running on localhost :" + PORT)
});




