const express = require("express")
const connectDB = require("./config/connectDB")
const app= express()

// npx nodemon server reloads the server whenever a change has happened
//4- Create the schema
const User = require('./models/User')

//3- setup environment variables
//we have to install dotenv via npm install dotenv
//this dotenv is used to hide the inportant data like db path and port
require('dotenv').config({path:'./config/.env'})

//2- connectDB
connectDB();

//5- start the CRUD
app.use(express.json())
//the first mothod is GET all users  path:/api/users

app.get('/api/users',(req,res)=>{
    User.find().then((users)=>res.send(users)).catch((err)=>res.send(err))
})
// GET user by id

app.get('/api/user/:id',(req,res)=>{
    const id = req.params.id
    User.findById(id).then((user)=>res.send(user)).catch((err)=>res.send(err))
})
//POST : add a user
app.post('/api/add_user',(req,res)=>{
    const {name,lastName,email,phone}=req.body
    const newUser= new User({name,lastName,email,phone}) //here we create a user that follows the schema
    newUser.save().then((user)=>res.send(user)).catch((err)=>res.send(err))
})
//EDIT  update a user
app.put('/api/users/:id',(req,res)=>{
    const id = req.params.id
    User.findByIdAndUpdate(id,{...req.body},{new:true}).then((user)=>res.send(user))
    .catch((err)=>res.send(err))
})
// DELETE
app.delete('/api/users/:id',(req,res)=>{
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then((user)=>res.send(user))
    .catch((err)=>res.send(err))
})
//1- start the server
const PORT = process.env.PORT
app.listen(PORT, (err)=>{
    err? console.error(err):
    console.log(`the server is running on port ${PORT}`)
})