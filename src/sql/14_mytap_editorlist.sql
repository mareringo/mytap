SET NAMES UTF8;
CREATE TABLE editorlist (
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(16),
  epwd VARCHAR(16),
  editor_avater VARCHAR(128)
);

INSERT INTO editorlist VALUES
  (null, 'yuki','123456', '#avater'),
  (null, 'thebigleg','123456', '#avater');