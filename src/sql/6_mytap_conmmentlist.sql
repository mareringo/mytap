SET NAMES UTF8;
CREATE TABLE commentlist (
  cid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  gid INT,
  comm TEXT,
  cdate BIGINT,
  clike INT,
  cpriority INT NOT NULL DEFAULT 0
);