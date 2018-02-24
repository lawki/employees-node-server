var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var employeeApi = require('./api/employee_api.js');
//var index = require('./routes/index');
//var users = require('./routes/users');
// 1. --UPDATES--
//var comment = require('./routes/comment');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/employees',(req,res)=>{
    employeeApi.getEmployees((err,data)=>{
        res.json(data);
    });
});

app.get('/api/employee/:id',(req,res)=>{
    employeeApi.getEmployeeById(req.params.id,(err,data)=>{
        if(err){
            res.json({success:false});
        }else{
            res.json(data);
        }
    });
});

app.post('/api/add_employee',(req,res)=>{
    employeeApi.saveEmployee(req.body.employee,(err,employee)=>{
        if(err){
            res.json({message:"Error"+err});
        }else{
            res.json({message:"success"});
        }
    });
});

app.listen(3000,function(){
    console.log('server started...')
})
