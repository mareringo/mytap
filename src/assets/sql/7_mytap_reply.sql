SET NAMES UTF8;
CREATE TABLE replylist (
  rid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  cid INT,
  reply TEXT,
  rdate BIGINT,
  rlikecount INT NOT NULL DEFAULT 0,
  rpriority INT NOT NULL DEFAULT 0
);