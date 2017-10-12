const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
let students = require('./routes/students');

// Connect To Database
mongoose.connect(config.database);

const app = express();
// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());
// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/users', users);
app.use('/students', students);
// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
