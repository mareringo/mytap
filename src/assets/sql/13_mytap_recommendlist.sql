SET NAMES UTF8;
DROP TABLE IF EXISTS recommendlist;
CREATE TABLE recommendlist (
  rid INT PRIMARY KEY AUTO_INCREMENT,
  eid INT,
  gid INT,
  title VARCHAR(64),
  image VARCHAR(128),
  intro VARCHAR(128)
);
INSERT INTO recommendlist VALUES
  (null,1,2,'神折纸 2','./assets/img/recommmend/f6448a2a67054c5a10fa266d5c8d205b.jpg','色彩拼图“神折纸”续作，体验艺术手工之美'),
  (null,1,3,'双子','./assets/img/recommmend/3b907b99fa11f8c668565ed1ca54de52.jpg','国际独立游戏大奖之作，方寸之间尽缱绻。'),
  (null,2,6,'微软纸牌','./assets/img/recommmend/c3d0c7abf7046082d710b0ec1ac4aae6.jpg','青春的纸牌，未玩待续。'),
  (null,2,1,'去月球','./assets/img/recommmend/294550afcd7be52d88dc6979acaa7245.jpg','“你还没告诉我你的名字呢” “我不会告诉你的”'),
  (null,1,8,'暗影诗章(Shadowverse)','./assets/img/recommmend/5b8e91d5cdf658c186176749eb139afe.jpg','年度最佳卡牌对战游戏，繁体中文版正式上线'),
  (null,1,14,'COMPASS : 战斗神意解析系统','./assets/img/recommmend/352bc7876cce87a98e115217d19c24c4.jpg','日系动作卡牌MOBA，决定命运的三分钟对决！'),
  (null,2,18,'克鲁赛德战记（心动版）','./assets/img/recommmend/d791cf70b7a8c5ec7395dea15b3e901e.jpg','罗曼最强训练官与魔女的相遇，专为Taper量身打造的即时动作消除游戏'),
  (null,2,12,'虚荣 (Vainglory)','./assets/img/recommmend/eea4a33833e26d04150dd244178e6624.jpg','真竞技MOBA手游！不卖属性道具！ 2.5版本将为大家带来全新的天赋系统以及相关的游戏内活动，还有多处细节提升和数款超炫酷的新皮肤一一亮相。'),
  (null,1,17,'超级马力欧 酷跑','./assets/img/recommmend/0e2d63f693b169ccd8992eed53f76295.jpg','童年回忆，正式开跑！'),
  (null,1,19,'Arcaea','./assets/img/recommmend/d7e3a9c091e31ef48d96e069561c1cd5.jpg','街机玩法与科幻画风结合的全新音游'),
  (null,2,29,'花塔之战','./assets/img/recommmend/b8b33aa3bf609e289fe95b962548192f.jpg','想当个小王子，保护我骄傲的玫瑰花'),
  (null,1,25,'神回避','./assets/img/recommmend/7913653f0fd5b761efe3712192bd3297.jpg','脑洞大开的解谜之作，解救“深陷危机”的主角吧！'),
  (null,2,30,'四目神','./assets/img/recommmend/b59f9be3c985b1bc59e864899bc6de96.jpg','和风文字逃出解谜，多种分支结局神秘上演');
  