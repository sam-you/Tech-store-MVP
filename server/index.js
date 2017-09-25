var express = require('express');
var db=require('../database/index')
var http=require('http');
var bodyParser = require('body-parser');
var session=require('express-session');
var bycrypt=require('bcrypt-nodejs');
var  app = express();
var port = 3000;


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(session({
secret:"shhh it's a secret",
resave:false,
aveUnintinalized:true
}));
// var data={id:5,brand:'Lenovo',cpu:'intel  core i3',ram:'4 GB',price:'300 $',screen:'15 inch',system:'Windows 8',image:'https://i5.walmartimages.com/asr/f90e4b18-c643-4cbb-bb50-b830a7ffc924_1.849b302c80483df24fb814b596af80e9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'};
// var laptop=new db(data);
// laptop.save(function (err) {
//         if (err) return handleError(err);
//         console.log('hi');
//     });
    // db.find({brand:'Lenovo'}).exec(function(err, computer){
    //   console.log(computer);
    //  })
app.listen(port, function() {
  console.log(`listening on port ${port}`);
 
});