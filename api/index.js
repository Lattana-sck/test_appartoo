const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session')
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

var corsOptions = {
    origin: ["http://localhost:4200"],
    credentials: true,
  };

dotenv.config();
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({
    name:'appartoo_session',
    secret: process.env.COOKIE_SECRET,
    httpOnly: true
}));

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

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