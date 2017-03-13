var express = require('express');

var app = express();

app.get('/', function(request, response){
  response.send("hello express");
})

app.listen(8000, function() {console.log('listening on 8000');})

/***************************************************
            INSTALL EXPRESS STATIC FILES
            npm install express
this is the line that tells our server to use the "/static" folder for static content
Two underscores before dirname
try printing out __dirname using console.log to see what it is and why we use it
****************************************************/
app.use(express.static(__dirname + "/static"));

/***************************************************
            INSTALL EJS TEMPLATE ENGINE
            npm install ejs
This sets the location where express will look for the ejs views
Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
****************************************************/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


console.log(__dirname);

/***************************************************
            PASSING VIEWS
****************************************************/
app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


/***************************************************
            BODY - PARSER NODE
            npm install body-parser

****************************************************/
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


/***************************************************
            ROUTING SYNTAX
****************************************************/
/***************************************************
            BASIC ROUTING TEMPLATE
app.HTTP_VERB('URL', function (request, response){});  // HTTP_VERB is either 'get' or 'post' etc...

// root route
app.get('/', function (request, response){
  response.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (request, response){
  // code to add user to db goes here!

  // redirect the user back to the root route.
  // All we do is specify the URL we want to go to:
  response.redirect('/');
})

****************************************************/
