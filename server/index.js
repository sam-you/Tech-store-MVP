var express = require('express');
var db=require('../database/index')
var http=require('http');
var bodyParser = require('body-parser');
var session=require('express-session');
var bycrypt=require('bcrypt-nodejs');
var  app = express();
var port = 3000;
var User=require('../database/model/User'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret:"shhh it's a secret",
	resave:false,
	aveUnintinalized:true
}));

app.get('/',function(req, res) {
	
	if(req.session!== !!req.session.user){
		res.redirect('login.html');
	}else{
		res.redirect('index.html');
	}
});

app.use(express.static(__dirname+'/../client/dist'));

app.get('/login', 
	function(req, res) {
	  res.redirect('login.html');
	});
app.get('/signup', 
	function(req, res) {
	  res.redirect('/signup.html');
})



app.post('/login', function(req, res) {
	
     var username = req.body.username;
    var password = req.body.password;

   User.findOne({ username: username }).exec(function(err, user) {
           if (!user) {
        
  
             res.redirect('/login.html');
       
          } else {
       
       
         if (user.password===password) {
           
           
           // res.redirect('/index.html');
           createSession(req, res, user);
         } else {
         	
          res.redirect('/login.html');
         }
       
    }
   });
});
app.post('/signup', function(req, res) {
	    var username = req.body.username;
	  var password = req.body.password;

	  User.findOne({ username: username })
	    .exec(function(err, user) {
	      if (!user) {
	      
	        var newUser = new User({
	          username: username,
	          password: password
	        });
	        newUser.save(function(err, newUser) {
	          if (err) {
	            res.send(500, err);
	          }
	          else {
	            createSession(req, res, newUser);
	          }
	        });
	      } 
	      else {
	        console.log('Account already exists');
	        res.redirect('/signup.html');
	      } 
	    });
});


isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

checkUser = function(req, res, next) {
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      //console.log(req.session.user.username);
      res.redirect('index.html');
    });
};


// // var data={id:5,brand:'Lenovo',cpu:'intel  core i3',ram:'4 GB',price:'300 $',screen:'15 inch',system:'Windows 8',image:'https://i5.walmartimages.com/asr/f90e4b18-c643-4cbb-bb50-b830a7ffc924_1.849b302c80483df24fb814b596af80e9.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'};
// // var laptop=new db(data);
// // laptop.save(function (err) {
// //         if (err) return handleError(err);
// //         console.log('hi');
// //     });
//     db.Computer.find({}).exec(function(err, computer){
//       console.log(computer);
//       })
app.listen(port, function() {
  console.log(`listening on port ${port}`);
 
});