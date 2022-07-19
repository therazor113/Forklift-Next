-- Up
CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT
);

INSERT INTO Users (
    id,
    firstName,
    lastName
) VALUES (123, 'John', 'Johnson');
INSERT INTO Users (
    id,
    firstName,
    lastName
) VALUES (234, 'Billy', 'Cipher');
INSERT INTO Users (
    id,
    firstName,
    lastName
) VALUES (345, 'Joe', 'Joey');


-- Down
DROP TABLE Users;
