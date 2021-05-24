const express = require('express');
const app = express();
const serv = require('http').Server(app);
const io = require('socket.io')(serv, {});

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/styles'));

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

const port = process.env.PORT || 8080;
serv.listen(port);
console.log("Server started on port", port);
