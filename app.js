const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',require('./routes/home'));

app.listen(3000,()=>{
console.log('server started at port 3000');
});