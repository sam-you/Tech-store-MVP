//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/computers';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log(' were connected!');
})

var computerSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  brand: String,
  cpu: String,
  ram: String,
  price: String,
  screen: String,
  system: String,
  image:String
});

exports.Computer = mongoose.model('Computers', computerSchema);
// exports.users = new Schema({
//     id: Schema.Types.ObjectId,
//     password: String,
//     username: String
// });
// exports.User = mongoose.model('User', userSchema);
 
// function savecomputer(data) {
//     var laptop =new Computer(data);
//     laptop.save(function (err) {
//         if (err) return handleError(err);
//         console.log('hi');
//     })
// }


