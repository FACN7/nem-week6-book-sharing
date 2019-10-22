function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
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
    books.forEach(function(book) {
      var row = document.createElement("tr");
      row.id = "row-" + book.title;
      var title = document.createElement("td");
      title.innerHTML = book.title;
      row.appendChild(title);
      var author = document.createElement("td");
      author.innerHTML = book.author;
      row.appendChild(author);
      var availability = document.createElement("td");
      availability.id = "status-" + book.title;

      // AVAILABILITY BLOCK

      if (book.availability === "available") {
        var header = document.createElement("div");
        header.innerText = "This book is available!";
        availability.appendChild(header);
        var bookingForm = document.createElement("form");
        bookingForm.class = "booking-form";
        bookingForm.method = "post";
        bookingForm.action = "/add-booking";
        var inputUser = document.createElement("input");
        inputUser.type = "text";
        inputUser.name = "username";
        inputUser.placeholder = "your name";
        bookingForm.appendChild(inputUser);
        var inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.name = "return-date";
        inputDate.placeholder = "return date";
        bookingForm.appendChild(inputDate);
        var submitBooking = document.createElement("button");
        submitBooking.type = "submit";
        submitBooking.name = "submit-booking";
        submitBooking.innerText = "I book!";
        submitBooking.appendChild(inputDate);
        availability.appendChild(bookingForm);
      } else {
        availability.innerText = "Sorry! The book is not available!";
      }

      row.appendChild(availability);
      table.appendChild(row);
    });
  }
}

// function updateBookingsStatus(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     var status = JSON.parse(data);
//     status.forEach(function(book) {
//       var statusCell = document.getElementById("status-" + book.title);
//       if (book.availability === "available") {
//         var header = document.createElement("div");
//         header.innerText = "This book is available!";
//         statusCell.appendChild(header);
//         var bookingForm = document.createElement("form");
//         bookingForm.class = "booking-form";
//         bookingForm.method = "post";
//         bookingForm.action = "/add-booking";
//         var inputUser = document.createElement("input");
//         inputUser.type = "text";
//         inputUser.name = "username";
//         inputUser.placeholder = "your name";
//         bookingForm.appendChild(inputUser);
//         var inputDate = document.createElement("input");
//         inputDate.type = "date";
//         inputDate.name = "return-date";
//         inputDate.placeholder = "return date";
//         bookingForm.appendChild(inputDate);
//         var submitBooking = document.createElement("button");
//         submitBooking.type = "submit";
//         submitBooking.name = "submit-booking";
//         submitBooking.innerText = "I book!";
//         submitBooking.appendChild(inputDate);
//         statusCell.appendChild(bookingForm);
//       } else {
//         statusCell.innerText = "Sorry! The book is not available!";
//       }
//     });
//   }
// }

request("/books", updateBooksListDom);
