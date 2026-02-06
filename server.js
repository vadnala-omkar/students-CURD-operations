const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const ejs = require('ejs');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoute');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// app.get('/home', (req, res)=>{
//     console.log("Home page requested");
//     res.render('index');
// })

app.get('/studentDashboard',(req, res)=>{
    console.log("Students dashboard requested");
    res.render('dashboard');
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