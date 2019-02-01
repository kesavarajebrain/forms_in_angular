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
// Serve only the static files form the dist directory
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});
app.use(express.static(__dirname + '/dist/angular-forms'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/angular-forms/index.html'));
    });
app.post('/postdata',function(req,res){
        console.log(req.body);
        res.status(200).send({"message":"Data received successfully"});
        })    
// app.get('/', function(req,res){
//     res.send('Express server working fine');
// })
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
// app.listen(PORT, function(){
//     console.log("Server running on localhost :" + PORT)
// });




