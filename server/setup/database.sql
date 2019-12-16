CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL ,
  email VARCHAR(100) NOT NULL ,
  password VARCHAR(128) NOT NULL,
  salt VARCHAR(100)
);

CREATE TABLE recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500),
  directions TEXT,
  user_id INT,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portion INT UNSIGNED,
  metric VARCHAR(45) NOT NULL,
  name VARCHAR(100) NOT NULL,
  recipe_id INT,
  CONSTRAINT fk_recipe FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

CREATE TABLE user_profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100), 
  tagline VARCHAR(300),
  about_you VARCHAR(1000),
  user_id INT,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE
);




CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(128) NOT NULL,
  salt VARCHAR(100),
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  tagline VARCHAR(255),
  about VARCHAR(1000),
  RecipeImages VARCHAR(500)
);

CREATE TABLE Favorite (
  id INT AUTO_INCREMENT PRIMARY KEY,
  favorite_id VARCHAR(100),
  username VARCHAR(100)
);