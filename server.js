const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoute');
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(bodyParser.json());

app.get('/home', (req, res)=>{
    console.log("Home page requested");
    res.send("Welcome to the home Page!")
})
app.get('/about',(req, res)=>{
    res.status(200).send("About us Page")
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console,log("Error connecting to MongoDB:", err);
})

app.use('/students', studentRoutes);



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
})