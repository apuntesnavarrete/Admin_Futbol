var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var edfRouter = require('./routes/edf');
var edmRouter = require('./routes/edm');
var edlibreRouter = require('./routes/edlibre');
var gemmixRouter = require('./routes/gemmix');
var gemjuveRouter = require('./routes/gemjuve');
var gemsubRouter = require('./routes/gemsub');
var psubRouter = require('./routes/psub');
var plibreRouter = require('./routes/plibre');
var pfRouter = require('./routes/pf');
var pmixRouter = require('./routes/pmix');
var resulpro = require('./routes/resul/pro')
var resuled = require('./routes/resul/ed')
var resulgem = require('./routes/resul/gem')
const generalPro = require('./routes/Tablageneral/pro')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ed/femenil', edfRouter);
app.use('/ed/mixta', edmRouter);
app.use('/ed/libre', edlibreRouter);
app.use('/ed/gmix', gemmixRouter);
app.use('/ed/gjuve', gemjuveRouter);
app.use('/ed/gsub', gemsubRouter);
app.use('/ed/plibre', plibreRouter);
app.use('/ed/pmix', pmixRouter);
app.use('/ed/psub', psubRouter);
app.use('/ed/pfemenil', pfRouter);
app.use('/resul/pro',resulpro)
app.use('/resul/ed',resuled)
app.use('/resul/gemelas',resulgem)
app.use('/general/pro',generalPro)

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

module.exports = app;
