require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');
const materialRoutes = require('./src/routes/materialRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/material', materialRoutes);

mongoose.connect('mongodb://localhost:27017/studybuddy')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server Started at http://localhost:5000");
});