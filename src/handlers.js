const { readFile } = require('fs');
const path = require('path');
const getData = require('./queries/borrow_q');

//const users = require('./static');

const serverError = (err, response) => {
    response.writeHead(500, 'Content-Type:text/html');
    response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    console.log(err);
};

const homeHandler = response => {
    const filepath = path.join(__dirname, '..', 'public', 'index.html');
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
    });
};

const getAllBooks = response => {
    // Replace the 3 lines below below with your own function that gets data from your database
    // const output = JSON.stringify(users);
    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.end(output);
    getData((err, res) => {
        if (err) return console.log(err);
        let dynmicData = JSON.stringify(res);
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(dynmicData);
        console.log(dynmicData);
    });
};

const publicHandler = (url, response) => {
    const filepath = path.join(__dirname, '..', url);
    readFile(filepath, (err, file) => {
        if (err) return serverError(err, response);
        const [, extension] = url.split('.');
        const extensionType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            ico: 'image/x-icon'
        };
        response.writeHead(200, { 'content-type': extensionType[extension] });
        response.end(file);
    });
};

const errorHandler = response => {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
    homeHandler,
    getAllBooks,
    publicHandler,
    errorHandler
};