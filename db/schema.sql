CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(40) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER,
    manager VARCHAR(40) NOT NULL
    );