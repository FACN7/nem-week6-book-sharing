# FACN7 Book Sharing
## A group project for Founders and Coders Nazareth, week 6

Link to [Heroku](https://nem-week6-book-sharing.herokuapp.com/)

### `how to install`

You can clone the repo by typing the command

```console
> git clone https://github.com/FACN7/nem-week6-book-sharing.git
> cd nem-week6-book-sharing
> npm i
> google-chrome index.html
```
### `how to test`

(WHEN WE HAVE TESTS HAHA)

Install tape and tap-spec

```console
> npm i tape -D
> npm i tap-spec -D
```

Run the test command

```console
> npm test
```
![](https://media.giphy.com/media/l0HlMEi55YsfXyzMk/giphy.gif)
## user journey

As a member of Founders & Coders who has a book I would like to share...

* I can add a book to the database
As a member of Founders & Coders who is interested in borrowing a book...

I can browse for available books
* I can reserve a book for certain dates
* I can unreserve a book

## our process:

- [x] Set up project architecture
* We were considering making 2 tables in our database, but ended up making three: Students, Books and Bookings
- [x] Set up a server
- [x] Set up a database
- [x] Host on Heroku incl database
- [x] Display the list of books from DB in DOM (+availability)
- [x] Add search by title
- [x] Add a book on client side
- [x] Borrow  - return mechanics 
- [x] CSS
- [ ] Tests

Stretch goals:

- [ ] Autocomplete
- [ ] Several reservations per book
- [ ] Codecov and Travis

## new stuff we've learned

* POST and GET requests to the server on a project with a database
* Made it working with XMLHttpRequest method 
* Hosting a DB on Heroku
* Protected out inputs against script injections

![](http://giphygifs.s3.amazonaws.com/media/GYU7rBEQtBGfe/giphy.gif)
