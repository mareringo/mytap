SET NAMES UTF8;
CREATE TABLE user_game_time (
  ugtid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  gid INT,
  playtime BIGINT NOT NULL DEFAULT 0
);