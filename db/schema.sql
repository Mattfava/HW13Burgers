CREATE DATABASE IF NOT EXISTS burgersdb;

use burgersdb;

CREATE TABLE IF NOT EXISTS burgers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);