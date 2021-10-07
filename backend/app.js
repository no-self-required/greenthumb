var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', usersRouter(dbHelpers));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/post', postRouter)

module.exports = app;
