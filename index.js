const express = require('express');
const app = express();
const port = 7000;
const find = require('array-find');

/* set templating engine */
app.set('view engine', 'ejs');

/* where are the templates stored */
app.set('views', 'view');

app.get('/', index);
app.get('/people', people);
app.use(express.static('public'));
app.get('/:idgit', profile)
app.use(notFound);

function index(req, res) {
res.render('index');
}

function notFound (req, res) {
    res.status(404).redirect('/404.html')
  }

function people(req, res){
    res.render('people', {data: data});}
;

function profile(req, res, next) {
    var id = req.params.id;
    var person = find(data, function (value) {
        return value.id === id
    })
    res.render('detail.ejs', {data: person});
}




app.listen(port, function(){
    console.log('The  server is running')
});




const data = [
    {
    id: "0",
    name: "Sanne",
    age:"27",
    place:"Amsterdam",
    bio: "I just started my journey. I work fulltime so I find it hard to workout during the week. I am looking for someone who can hold me accountable and pushes me.",
    },
    {
    id: "1",
    name: "Gaby",
    age:"22",
    place:"Alphen aan den Rijn",
    bio: "I have been doing fitness for two years now. I am very motivated and I like to workout 5 days a week. I am looking for someone I can help as I've had a friend who's helped me starting this journey.",
    },
    {
    id: "2",
    name: "Tim",
    age:"24",
    place:"Rotterdam",
    bio: "I am a football trainer at Feyenoord. I love to help people improve their overall health. If you'd like to improve your cardio, hit me up!",
     },
     {
    id: "3", 
    name: "Giordano",
    age:"21",
    place:"Rotterdam",
    bio: "I've tried nummerous times to lose weight but I find it very diffult. I am overweight and I never know what to do in the gym, so often I just leave after 15 minutes on the elliptical. I am looking for some guidance.",
    }
]
