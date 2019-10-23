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
    console.log("error:", err);
  } else {
    var books = JSON.parse(data);
    var table = document.getElementById("books-table");
    books.forEach(function (book) {
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
        row.className = "available";
        var header = document.createElement("div");
        header.innerText = "This book is available!";
        availability.appendChild(header);
        var bookingForm = document.createElement("form");
        bookingForm.className = "booking-form";
        bookingForm.method = "post";
        bookingForm.action = "/add-booking";
        var inputUser = document.createElement("input");
        inputUser.type = "text";
        inputUser.name = "student_id";
        inputUser.placeholder = "student_id";
        var inputDate = document.createElement("input");
        inputDate.type = "date";
        inputDate.name = "return-date";
        inputDate.placeholder = "return date";
        var submitBooking = document.createElement("button");
        submitBooking.type = "submit";
        submitBooking.name = "submit-booking";
        submitBooking.innerText = "I book!";
        bookingForm.appendChild(inputUser);
        bookingForm.appendChild(inputDate);
        bookingForm.appendChild(submitBooking);
        availability.appendChild(bookingForm);
      } else {
        row.className = "unavailable";
        var header = document.createElement("div");
        header.innerText = "Sorry! The book is not available!";
        var submitReturn = document.createElement("button");
        submitReturn.type = "submit";
        submitReturn.name = "submit-return";
        submitReturn.innerText = "I returned the book";
        submitReturn.setAttribute("name", `${book.isnb}`);
        availability.appendChild(header);
        availability.appendChild(submitReturn);
      }

      row.appendChild(availability);
      table.appendChild(row);
    });
  }
}

request("/books", updateBooksListDom);
