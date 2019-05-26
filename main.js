var express = require('express');
var port = 4205;
var app = express();
var cookie = require('cookie-parser');
var bodyparser = require('body-parser');   // to get the data from the url


//to enable two time authentication 

app.use((req,res,next) =>
{

    console.log("middleware one called");
    next();                                       //frst this method will be called thn 

});

app.use('/',(req,res,next)=>
{                                                   // this method will be called , if both succed other will be called        
                                                    
    console.log("middleware called");               // middleware to check authentication token 
    next();
});

app.use(bodyparser.json());           // to get the json data

app.use(bodyparser.urlencoded({ extended:true}));  // to not show the data in the URL...


var route = require('./controller/usercontroller.js');

app.use('/user',route);






// app.get('/',(req,res)=>{

//     res.send("Home page called");
// });

// app.get('/user',(req,res)=>{

//     res.send("user page called with middleware 1");
// });



app.get('/user/*list',(req,res)=>
{
    res.send("List method called");    // * means url that ends with list comes this memthod will be called.
});


var server = app.listen(port,()=>
{
    console.log("server started");
});
