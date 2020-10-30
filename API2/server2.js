const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Student = require('./model/student')
const app= express();
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/SchoolDB')
    .then(()=>{
        console.log('OK');
    })
    .catch(err=>{
        console.log('Error' + err.message)
    });

app.get('/student',(req,res)=>{
    Student.find()
        .then(data=>{
            res.json({'Student':data
            });
        })
        .catch(err=>{
            res.status(500).json({
                'messages':err.message
            });
        });
});

app.post('/student',(req,res)=>{
    const student = new Student({
        name:req.body.name,
        address: req.body.address
    });
        student.save()
        .then(()=>{
            res.json({'message':'OK'});
        })
        .catch(err=>{
            res.json({'message': err.message});
        });
});

app.get('/',(req,res) =>{
    res.json({"data":"Tran Duc Bo"})
});

app.listen(3000,()=>{
    console.log('Server run 3000');
});