SET NAMES UTF8;
CREATE TABLE ugamescore (
  ugsid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  gid INT,
  ugscore DECIMAL(3,1),
  scoretime BIGINT NOT NULL DEFAULT 0
);