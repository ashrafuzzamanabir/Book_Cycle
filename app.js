require('dotenv').config()

const path = require('path');

const express = require('express')
const app = express()
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 3000; // Use 3000 as a default port if PORT is not defined in the environment.

// for using css 
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.set('view engine', 'ejs');// setting the view engine to ejs
app.set('views', path.join(__dirname, 'views')); // This sets the views directory to the 'views' folder in your project.


// for home route
const home = require('./routes/home.js')
app.use("/home", home)
app.use("/", home)

// for signup route
const signup = require('./routes/signup.js')
app.use("/signup", signup)

// for signin route
const signin = require('./routes/signin.js')
app.use("/signin", signin)


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
