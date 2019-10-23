BEGIN;

DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS borrowing CASCADE;


CREATE TABLE books (
    isnb SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    author VARCHAR(30)
    );
    CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(30) NOT NULL
    );
        -- student_id int FOREIGN KEY REFERENCES students (id),

    CREATE TABLE borrowing (
    book_id int NOT NULL,
    student_id int NOT NULL,
    start_time DATE,
    end_time DATE,
    FOREIGN KEY (book_id) REFERENCES books (isnb),
    FOREIGN KEY (student_id) REFERENCES students (id)

    );

INSERT INTO books (isnb, title, author)
VALUES (1, 'harry potter', 'i dont know');
INSERT INTO books (isnb, title, author)
VALUES (2, 'men under the sun', 'najeeb mahfood');
INSERT INTO books (isnb, title, author)
VALUES (3, 'haifa return', 'najeeb mahfood');
INSERT INTO students (id, fullname)
VALUES(1,'Ebraheem Abbas');
INSERT INTO students (id, fullname)
VALUES(2,'Natalia Filippova');
INSERT INTO students (id, fullname)
VALUES(3,'Moses Corcias');
INSERT INTO students (id, fullname)
VALUES(4,'Faris Abotayea');
INSERT INTO borrowing (book_id,student_id,start_time,end_time)
VALUES (2,1,'2019-09-11','2019-09-14');
INSERT INTO borrowing (book_id,student_id,start_time,end_time)
VALUES (3,2,'2019-09-11','2019-11-20');


COMMIT;
