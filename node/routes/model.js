var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://mongo:27017/memo')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

var Memo = new Schema({
    memo: String
})
exports.Memo = mongoose.model('Memo', Memo);
