var express = require('express');
var router = express.Router();

var model = require('../models/posts');
var Post = model.Post;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/view', function(req, res){
   Post.find({}, function(err, items){
     res.render('index', { title: 'メニューの表示', items:items})
   });
});

router.post('/create', function(req, res) {
  var newPost = new Post(req.body);
  newPost.save(function(err){
    if (err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/');
    }
  })
});

router.get('/read', function(req, res){
  Post.find({}, function(err, items){
    if (err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.render('/', { title: 'タイトル', items: items});
    }
  });
});

router.post('/delete', function(req, res) {
  Post.remove({ _id: req.param("id") }, function(err) {
    if (err) {
      console.log(err);
      res.redirect('back');
    } else {
      res.redirect('/');
    }
  })
})

module.exports = router;
