-- create the tables for our movies
CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `first_names` varchar(100) NOT NULL,
   `last_name` varchar(100) NOT NULL,
   `dob` char(10) DEFAULT NULL,
   PRIMARY KEY (`actorid`)
);
-- insert data into the tables
INSERT INTO actors
VALUES 
   (6, "Tom", "Holland", "1996-06-01"),
   (7, "Emma", "Stone", "1988-11-06"),
   (8, "Denzel", "Washington", "1954-12-28"),
   (9, "Tom", "Hanks", "1956-07-09"),
   (10, "Imelda", "Staunton", "1956-01-09");