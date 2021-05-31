const express = require('express');
const app = express();
const serv = require('http').Server(app);
const io = require('socket.io')(serv, {});
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/styles'));
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'post.multimusic@gmail.com',
        pass: 'Musician1'
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/header', function(req, res) {
    res.sendFile(__dirname + '/views/header.html');
});

app.get('/smallheader', function(req, res) {
    res.sendFile(__dirname + '/views/smallheader.html');
});

app.get('/footer', function(req, res) {
    res.sendFile(__dirname + '/views/footer.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get('/classes', function(req, res) {
    res.sendFile(__dirname + '/views/classes.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/gallery', function(req, res) {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.get('/contacted', function(req, res) {
    res.sendFile(__dirname + '/views/contacted.html');
});

app.get('/mailing', function(req, res) {
    res.sendFile(__dirname + '/views/mailing.html');
});

app.post('/submit_contact_form', function(req, res) {
    let mailOptions = {
        from: req.body.Name + ' <post.multimusic@gmail.com>',
        to: "lisasuehoesing@gmail.com",
        replyTo: req.body.Name + ' <' + req.body.Email + '>',
        subject: req.body.Subject,
        text: req.body.Message
    };
    transporter.sendMail(mailOptions);
    res.redirect('/contacted');
});

app.post('/submit_mailing_form', function(req, res) {
    let mailOptions = {
        from: 'TangledManeZ Webmaster <post.multimusic@gmail.com>',
        to: "lisasuehoesing@gmail.com",
        subject: 'TangledManeZ: Mailing List Request',
        text: 'Hi Lisa,\n\nThe following person has requested to be added to the TangledManeZ mailing list:' +
            '\n\n' + req.body.mailingemail + '\n\nBest,\nYour website'
    };
    transporter.sendMail(mailOptions);
    res.redirect('/mailing');
});

const port = process.env.PORT || 8080;
serv.listen(port);
console.log("Server started on port", port);
