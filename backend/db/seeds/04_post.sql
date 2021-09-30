DROP TABLE IF EXISTS post CASCADE;
CREATE TABLE post(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(1500) NOT NULL,
    username VARCHAR(100) NOT NULL,
    like VARCHAR(255) NOT NULL,
    date TIMESTAMP
);

INSERT INTO
posts(title, body, username, like)
VALUES
    ('test', 'Some test body goes here.', 'mario', '10')