-- Select the appropriate database
USE iit;

-- Create the movie_actor table
CREATE TABLE `movie_actor` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `movieid` INT(10) unsigned NOT NULL,
    `actorid` INT(10) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`movieid`) REFERENCES `movies`(`movieid`),
    FOREIGN KEY (`actorid`) REFERENCES `actors`(`actorid`)
);

-- Associate actors with movies
INSERT INTO movie_actor (movieid, actorid) 
VALUES
    (1, 1), -- Movie 1, Actor 1
    (1, 2), -- Movie 1, Actor 2
    (2, 3), -- Movie 2, Actor 3
    (3, 1), -- Movie 3, Actor 1
    (3, 3); -- Movie 3, Actor 3