const {
  homeHandler,
  getAllBooks,
  publicHandler,
  errorHandler,
  donateABook,
  borrowBook,
  returnBookHandler
} = require("./handlers");
// const fs = require("fs");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url === "/books") {
    getAllBooks(response);
  } else if (url.includes("public")) {
    publicHandler(url, response);
  } else if (url === "/add-book") {
    donateABook(request, response);
  } else if (url === "/add-booking") {
    borrowBook(request, response);
  } else if (url === "/return-book") {
    returnBookHandler(request, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
