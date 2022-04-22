var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



const http = require('http')
const port = 3000


 


// const { Socket } = require('dgram');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var server = http.createServer(app);

const io = require('socket.io')(server)


io.sockets.on('connection', function (socket) {
  socket.on('join', function(data) {
    console.log(data);});
  socket.on('messageChange', function (data) {
    console.log("received from client",data);
    // socket.emit('receive', data.message.split('').reverse().join('') );
    io.emit('receive', data.message);
    // socket.emit('receive', data );
  });
});

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});

module.exports = app;