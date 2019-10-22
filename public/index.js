function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(null, xhr.responseText);
      } else {
        cb("error" + xhr.responseType);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function updateBooksListDom(err, data) {
  if (err) {
    console.log(err);
  } else {
    var books = JSON.parse(data);
    var table = document.getElementById("users-table");
    books.forEach(function (book) {
      var row = document.createElement("tr");
      // compare to DB
      row.id = "row-" + book.title;
      var title = document.createElement("td");
      // compare to DB
      title.innerHTML = book.title;
      row.appendChild(title);
      var author = document.createElement("td");
      // compare to DB
      author.innerHTML = book.author;
      row.appendChild(author);
      var availability = document.createElement("td");
      row.appendChild(availability);
      table.appendChild(row);
    });
  }
}

// function updateBookingsDom(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     var books = JSON.parse(data);
//     var table = document.getElementById("users-table");
//     books.forEach(function(book) {
//       var row = document.createElement("tr");
//       var title = document.createElement("td");
//       // compare to DB
//       title.innerHTML = book.title;
//       row.appendChild(title);
//       table.appendChild(row);
//     });
//   }
// }

request("/books", updateBooksListDom);
