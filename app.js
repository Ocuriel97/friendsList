var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extendend: true}))

var friends = ['bob','taco','bell'];

app.set('view engine','ejs')

app.get('/',function(req,res){
  res.render('home')
})

app.get('/friends', function(req,res){
  res.render('friends', {friends: friends})
})

app.post('/addfriend', function(req,res) {
  var newFriend = req.body.name
  friends.push(newFriend)
  res.redirect('friends')
})

app.listen(3000, function(){
  console.log('Server is running')
})
