const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`backend server is running on port ${PORT}`);
})