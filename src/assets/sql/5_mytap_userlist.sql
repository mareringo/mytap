SET NAMES UTF8;
CREATE TABLE userlist (
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(16),
  uemail VARCHAR(32),
  uphone VARCHAR(20),
  gender VARCHAR(1) NOT NULL DEFAULT '0',
  avatar VARCHAR(128) NOT NULL DEFAULT '',
  ubirth BIGINT NOT NULL DEFAULT 0
);

INSERT INTO userlist VALUES
  (null, 'dingding', '123456', '123456@163.com', '12388888888', null, './assets/img/avatar/user_1_avatar.jpg', null ),
  (null, 'thebigleg', '123456', '123456@163.com', '12388888888', null, './assets/img/avatar/user_2_avatar.jpg', null );