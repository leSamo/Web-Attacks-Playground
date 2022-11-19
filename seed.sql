DROP USER readonly;
DROP TABLE passwords;

CREATE TABLE passwords (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE USER readonly;
GRANT SELECT ON passwords TO readonly;

INSERT INTO passwords (username, password) VALUES ('user1', 'pa$$w0rd');
INSERT INTO passwords (username, password) VALUES ('admin', 'AdMiN123567');
