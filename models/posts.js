var mongoose = require('mongoose');

function validator(v) {
    return v.length > 0;
}

var Post = new mongoose.Schema({
  name   : {
    type: String, validate: [validator, "Empty Error"]
  },
  price : {
    type: Number,
    default: 500
  },
  order_user : {
    type: Array, //user_nameの配列を格納
    default: []
  },
  created: {
    type: Date,
    default: Date.now
  }
});

exports.Post = mongoose.model('Post', Post);
