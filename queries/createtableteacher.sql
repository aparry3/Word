CREATE TABLE teacher(
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    datecreated TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id)
)