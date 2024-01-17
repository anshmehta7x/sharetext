const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
const User = require('./UserSchema.js');
const { hashPassword } = require('./hashandsalt.js');

mongoose.connect('mongodb+srv://a7x:RRyvDYLyNrxhRyDQ@cluster0.g0xxhmx.mongodb.net/app_users?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.post('/newuser', async (req,res)=>{
    const {username,email,password} = req.body; // Destructuring
    const {hash,salt} = hashPassword(password);
    try{
        const user = await User.create({username,email,password:{hash,salt}});
        console.log(user._id);
        res.status(200).send(user._id);
        
    }
    catch(err){
        console.log(err);
        res.status(400).json({err});
    }
});

app.post('/login', async (req,res)=>{
    console.log(req.body)
    const {username,password} = req.body; // Destructuring
    try{
        const user = await User.findOne({username});
        if(user){
            console.log(user);
            res.status(200).send(user._id);
        }
        else{
            res.status(400).json({err:"Incorrect username password combination"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({err});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  