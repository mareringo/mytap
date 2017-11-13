<?php
/**
* 向提供游戏排名前十位的信息
* 需要一个类型码以提供所需的排名类型
* 返回数据形如：
  {
    [ ], [ ]
  }
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../header_init.php');
@$type = $_REQUEST['type'];
if(!$type) {
  $type = '0';
}
switch($type) {
  case 0:
    $scoreType = 'gscore';
    break;
  case 1:
    $scoreType = 'gscore_andriod';
    break;
  case 2:
    $scoreType = 'gscore_ios';
    break;
  case 3:
    $scoreType = 'gscore_recently';
    break;
  default:
    $scoreType = 'err';
}
if($scoreType == 'err') {
  echo('{"code":501, "msg":"type number err"}');
}else {
  $output = [];

  require_once('../init.php');

  //1.获取轮播广告项
  $sql = "SELECT gid, gname, gscore, gscore_andriod, gscore_ios, gicon_100 FROM gamelist ORDER BY $scoreType DESC LIMIT 0, 10";
  $result = mysqli_query($conn, $sql);
  if(!$result){       //SQL语句执行失败
    echo('{"code":500, "msg":"db execute err"}');
  }else {
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    echo json_encode($set);
  }
  
}
