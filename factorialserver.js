var express=require('express');
var module1=require('./module1');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.get('/',function(req,res)
{
    console.log('sending rsponse');
    res.sendFile("factorial.html",{root:__dirname});
});
app.post('/factorial',function(req,res)
{
    console.log(req.body.num1);
    res.send("<h1>Factorial Of Your no. is "+module1.factorial(req.body.num1)+"</h1>");
});

app.post('/square',function(req,res)
{
    res.send("<h1>Square Of  Your no. is "+module1.square(req.body.num2)+"</h1>");
})

app.listen(8081);
