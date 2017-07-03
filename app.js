var express = require('express');
var path = require('path');
var fs = require('fs');
var hljs = require('highlight.js');
console.log(hljs);
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var connection = require('express-myconnection');
// var mysql = require('mysql');
var marked = require('marked');

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: (code, lang) => {
        var res;
        // console.log(lang);
        // if (lang) {
        //     res = hljs.highlight(lang, code, true).value;
        // } else {
            res = hljs.highlightAuto(code).value;
        // }
        return res;
    },
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(cookieParser());

// app.use(
//     connection(mysql, {
//         host: 'localhost',
//         user: 'root',
//         password: 'admin',
//         database: 'nodejs'
//     }, 'pool')
// )


// app.use('/', index);
// app.use('/users', users);
app.use('/go', (req, res, next) => {
        fs.readFile(path.join(__dirname, 'public/note/go.md'), 'utf-8', (err, data) => {
            const html = marked(data);
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            res.end(html);
        })
    })
    // app.use('/static', express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(3000, () => {
        console.log('start server');
        console.log(path.join(__dirname, 'public'));
    })
    // module.exports = app;