var express = require('express');

var app = express();
var cookie = require('cookie-parser');

var router = express.Router();


app.use(cookie());

router.get('/login',(req,res,next)=>
{
    res.send("user login called");                 // for / user this method will be called 
    console.log("login method called");

    res.cookie('login','login details stored');   // to store the values in the cookie

    next();
});



module.exports = router;


router.get('/register',(req,res,next)=>
{

    res.clearCookie('login');   // to remove cookie 

    res.send("user register called");          // for /user/login this method will be callled
    next();
});
