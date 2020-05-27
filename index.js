const express = require('express');
const app = express();
const port = 8090;

app.get('/index.html', home);
app.use(express.static('public'));

function home(req, res){}

app.use(function (req, res, next) {
    res.status(404).redirect('/404.html')
  })

app.listen(port, function(){
    console.log('The  server is running')
});
