const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors')
const reviewRoutes = require('./routes/api/reviews')
const path = require('path')
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
var http = require("http");

setInterval(function() {
    const timeNow = new Date().getHours();
 if (timeNow>4 && timeNow<22) {
   http.get("http://resume-elmermendoza.herokuapp.com");
   console.log("time")
 }
    console.log("heroku ping")
    console.log(timeNow)
}, 30000)

require('dotenv').config();

const app = express();

app.use(cors());

// Bodyparser Middleware

app.use(express.json());

// Connect to Mongo

mongoose
.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('MongoDB connected...'))
.catch(err=>console.log(err));


// Use Route

app.use('/api/reviews',reviewRoutes)

// code added
// if(process.env.NODE_ENV === 'production'){
//   app.use(static('build'))
// }
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"client/build")));
  app.get("*",(req,res)=> {
    res.sendFile(path.join(__dirname,"client","build","index.html"));
  })
} else {
  app.get("/",(req,res)=> {
    res.send("Api running")
  })
}

const port = process.env.PORT || 5001;

app.listen(port,()=> console.log(`Server started on port ${port}`));