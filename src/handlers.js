const http = require("http");
const pg = require("pg");
const { readFile } = require("fs");
const fs = require("fs");
const path = require("path");
const queryString = require("querystring");
const getData = require("./queries/borrow_q");
const addBook = require("./queries/add_book_q");
const insertNewBorrow = require("./queries/insert_new_borrow");
const returnBook = require("./queries/return_book");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Type:text/html");
  response.end("<h1>Sorry, there was a problem loading the homepage</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const getAllBooks = response => {
  getData((err, res) => {
    if (err) return console.log(err);
    let dynmicData = JSON.stringify(res);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(dynmicData);
    console.log(dynmicData);
  });
};

const donateABook = (request, response) => {
  let data = "";
  request.on("data", function (chunk) {
    data += chunk;
  });
  request.on("end", () => {
    const title = queryString.parse(data).title;
    const author = queryString.parse(data).author;
    addBook(title, author, (err, res) => {
      if (err) {
        response.writeHead(500, "Content-Type: text/html");
        response.end("<h1>Sorry, there was a problem adding that book</h1>");
        console.log(err);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + "/../public/index.html", function (error, file) {
          if (error) {
            throw new Error("We have an error:", err);
            return;
          } else {
            response.end(file);
          }
        });
      }
    });
  });
};

const returnBookHandler = (request, response) => {
  let data = "";
  request.on("data", function (chunk) {
    data += chunk;
  });
  request.on("end", () => {
    console.log(queryString.parse(data));
    const book_id = queryString.parse(data).book_id;
    returnBook(book_id, (err, res) => {
      if (err) {
        response.writeHead(500, "Content-Type: text/html");
        response.end("<h1>Sorry, there was a problem returning that book</h1>");
        console.log(err);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + "/../public/index.html", function (error, file) {
          if (error) {
            throw new Error("We have an error:", err);
            return;
          } else {
            response.end(file);
          }
        });
      }
    });
  });
};

const borrowBook = (request, response) => {
  let data = "";
  request.on("data", function (chunk) {
    data += chunk;
  });
  request.on("end", () => {
    console.log(queryString.parse(data));
    const book_id = queryString.parse(data).book_id;
    const student_id = queryString.parse(data).student_id;
    //const start_time = queryString.parse(data).start_time;
    const end_time = queryString.parse(data).end_time;
    insertNewBorrow(book_id, student_id, end_time, (err, res) => {
      if (err) {
        response.writeHead(500, "Content-Type: text/html");
        response.end("<h1>Sorry, there was a problem adding that book</h1>");
        console.log(err);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(__dirname + "/../public/index.html", function (error, file) {
          if (error) {
            throw new Error("We have an error:", err);
            return;
          } else {
            response.end(file);
          }
        });
      }
    });
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  homeHandler,
  getAllBooks,
  publicHandler,
  errorHandler,
  donateABook,
  borrowBook,
  returnBookHandler
};
