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

    INSERT INTO employees (first_name, last_name, title, department, salary, manager)
    VALUES
    ('Ronald', 'McDonald', 'Salesperson', 'Sales', '80000', 'John Doe'),
    ('Ashley', 'Rodriguez', 'Lead Engineer', 'Engineering', '150000', 'null'),
    ('Kevin', 'Tupik', 'Software Engineer', 'Engineering', '150000', 'Ashley Rodriguez'),
    ('Michael', 'Scott', 'Accountant', 'Finance', '125000', 'null'),
    ('Sarah', 'Lourd', 'Legal Team Lead', 'Legal', '250000', 'null'),
    ('Tom', 'Allen', 'Lawyer', 'Legal', '190000', 'Sarah Lourd');
