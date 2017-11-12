SET NAMES UTF8;
CREATE TABLE user_game_fav (
  ugfid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  gid INT,
  isfav INT NOT NULL DEFAULT 1
);