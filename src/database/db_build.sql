BEGIN;

DROP TABLE IF EXISTS users, tutorials;

CREATE TABLE IF NOT EXISTS users (
    id          SERIAL        PRIMARY KEY,
    name        TEXT          NOT NULL,
    email       VARCHAR(200)  NOT NULL,
    password    TEXT   NOT NULL
);

INSERT INTO users (name, email, password) VALUES ('admin','admin@gmail.com','admin123');

CREATE TABLE IF NOT EXISTS tutorials (
    id          SERIAL     PRIMARY KEY,
    language_name       TEXT       NOT NULL,
    link        TEXT,
    user_id     INTEGER
);

INSERT INTO tutorials (language_name, link, user_id) VALUES ('HTML', 'https://www.youtube.com/watch?v=UB1O30fR-EE&fbclid=IwAR0sTSuqss1aeQGGwovstiOIoPWVSEXJbmLgdtXojugd2lSKgJ8Gp05KE40', '1');


COMMIT;
