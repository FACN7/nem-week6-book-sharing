BEGIN;

    DROP TABLE IF EXISTS books,students,borrowing
    CASCADE;


CREATE TABLE books
(
    isnb SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    author VARCHAR(30)
);
CREATE TABLE students
(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(30) NOT NULL
);
-- student_id int FOREIGN KEY REFERENCES students (id),

CREATE TABLE borrowing
(
    book_id int NOT NULL,
    student_id int NOT NULL,
    start_time DATE not null default CURRENT_DATE,
    end_time DATE,
    FOREIGN KEY (book_id) REFERENCES books (isnb),
    FOREIGN KEY (student_id) REFERENCES students (id)

);

INSERT INTO books
    (title, author)
VALUES
    ('harry potter', 'i dont know');
INSERT INTO books
    (title, author)
VALUES
    ('men under the sun', 'najeeb mahfood');
INSERT INTO books
    (title, author)
VALUES
    ('haifa return', 'najeeb mahfood');
INSERT INTO students
    (fullname)
VALUES('Ebraheem Abbas');
INSERT INTO students
    (fullname)
VALUES('Natalia Filippova');
INSERT INTO students
    (fullname)
VALUES('Moses Corcias');
INSERT INTO students
    (fullname)
VALUES('Faris Abotayea');
INSERT INTO borrowing
    (book_id,student_id,end_time)
VALUES
    (2, 1, '2019-09-14');
INSERT INTO borrowing
    (book_id,student_id,end_time)
VALUES
    (3, 2, '2019-11-20');


COMMIT;
