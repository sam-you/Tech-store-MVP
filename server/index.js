var express = require('express');
var db=require('../database/index')
var  app = express();
var port = 3000;

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