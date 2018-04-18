var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect("mongodb://localhost:27017/ex1", function(err, database) {
    if (err) {
        console.error(err);
    } else {
        db = database.db('ex1');
    }
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', indexRouter);
app.use('/users', usersRouter.createUser);*/
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.get('/users/list', (req, res) => {
    db.collection('users').find().toArray((err, result) => {
        if (err) return console.log(err)
        else {
            res.send(result)
        }
    })
});

app.post('/users/create', function(req, res) {
    db.collection('users').save(req.body, function(err, result) {
        if (err) return console.log(err)
        console.log('saved to database')
        res.send(result);
    })
});

app.put('/users/edit/:name', (req, res) => {
    db.collection('users')
        .findOneAndUpdate({ name: req.params.name }, {
            $set: {
                name: req.body.name
            }
        }, {
            sort: { _id: -1 },
            upsert: true
        }, (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
});

app.delete('/users/delete/:name', (req, res) => {
    db.collection('users').findOneAndDelete({ name: req.params.name }, (err, result) => {
        if (err) return res.send(500, err)
        res.send('A darth vadar quote got deleted')
    })
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
app.listen(8080, function() {
    console.log('Server running at port 8080: http://127.0.0.1:8080')
})

/*app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});*/
module.exports = app;