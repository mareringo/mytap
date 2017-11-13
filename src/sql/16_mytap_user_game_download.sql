SET NAMES UTF8;
CREATE TABLE user_game_download (
  ugdid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  gid INT,
  download INT NOT NULL DEFAULT 0
);