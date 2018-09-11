CREATE DATABASE IF NOT EXISTS stacklabs_inventions CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER IF NOT EXISTS 'stacklabs'@'localhost' IDENTIFIED BY 'azerty1234';
GRANT ALL PRIVILEGES on stacklabs_inventions.* to 'stacklabs'@'localhost';

USE stacklabs_inventions;

CREATE TABLE IF NOT EXISTS items (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  picture VARCHAR(255)
);

INSERT INTO items (name, picture) VALUES
  ('Tongs','/images/tongs.jpg'),
  ('Ballon de plage','/images/ballon.jpg'),
  ('Raquettes de plage','/images/raquettes.jpg'),
  ('Bouée grenouille','/images/bouee-grenouille.jpg');