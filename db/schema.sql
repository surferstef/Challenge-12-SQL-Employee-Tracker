DROP DATABASE IF EXISTS company;

CREATE DATABASE company;
USE company;


CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(40) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INTEGER,
    manager VARCHAR(40) NOT NULL
     );

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);