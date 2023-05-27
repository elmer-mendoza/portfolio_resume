const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors')
const reviewRoutes = require('./routes/api/reviews')
const path = require('path')

var http = require("http");


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

app.get("/",(req,res)=> {
  res.send("Api running")
})
app.use('/api/reviews',reviewRoutes)

// code added
// if(process.env.NODE_ENV === 'production'){
//   app.use(static('build'))
// }
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname,"client/build")));
//   app.get("*",(req,res)=> {
//     res.sendFile(path.join(__dirname,"client","build","index.html"));
//   })
// } else {
//   app.get("/",(req,res)=> {
//     res.send("Api running")
//   })
// }

const port = process.env.PORT || 5001;

app.listen(port,console.log(`server running at port ${port}`))
