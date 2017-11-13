SET NAMES UTF8;
CREATE TABLE videolist (
  vid INT PRIMARY KEY AUTO_INCREMENT,
  gid INT,
  gvideo_src VARCHAR(128),
  gvideo_img VARCHAR(128)
);