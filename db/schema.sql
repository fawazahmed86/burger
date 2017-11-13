DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  burgerName VARCHAR(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
