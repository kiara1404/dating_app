const express = require('express');
const app = express();
const port = 8000;
const find = require('array-find');
const bodyParser = require("body-parser"); 
const slug = require("slug");
const mongo = require('mongodb')

require('dotenv').config();

//database connect
var db = null;
var url = 'mongodb+srv://' + process.env.DB_HOST;

mongo.MongoClient.connect(url, 
    { useUnifiedTopology: true, },
    function (err, client) {
    if (err){
         throw err
    }
    db = client.db(process.env.DB_NAME);
    console.log('Succesfully connected to MongoDB')

}
);

//set templating engine 
app.set('view engine', 'ejs');
// where are the templates stored
app.set('views', 'view');
//
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', index);
app.get('/people', people)
app.use(express.static('public'));
//app.use(notFound);
app.post('/', add)
app.get('/add', form)
app.get('/:id', person)
app.listen(port, function(){
    console.log('The  server is running')
});


function index(req, res) {
res.render('index');
}

function people(req, res){
    res.render('people', {data: data});
}

function notFound (req, res) {
    res.status(404).redirect('/404.html')
  }

function form(req, res) {
   res.render('add');
}
function add(req,res,next){
    db.collection("getfit").insertOne({
    name: req.body.name,
    age: req.body.age,
    place: req.body.place,
    bio: req.body.bio
    }, done)

    function done(err, data) {
        if(err) {
            next(err)
        } else {
            res.redirect('/'+ data.insertedId)
        }
    }
}

function person(req, res) {
    res.render('detail');
}