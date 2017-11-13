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


@$type = $_REQUEST['type'];
if(!$type) {
  $type = '0';
}
switch($type) {
  case 0:
    $scoreType = 'gscore';
    break;
  case 1:
    $scoreType = 'gscore_recently';
    break;
  case 2:
    $scoreType = 'gscore_andriod';
    break;
  case 3:
    $scoreType = 'gscore_ios';
    break;
  default:
    $scoreType = 'err';
}
if($scoreType == 'err') {
  echo('{"code":501, "msg":"type number err"}');
}else {
  $output = [];

$db_host = 'qdm17623654.my3w.com';
$db_user = 'qdm17623654';
$db_password = 'thebigleg0511';
$db_database = 'qdm17623654_db';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect($db_host, $db_user, $db_password, $db_database, $db_port);
mysqli_query($conn, "SET NAMES $db_charset");

  //1.获取轮播广告项
  $sql = "SELECT gid, gname, gscore, gicon_100 FROM gamelist ORDER BY $scoreType DESC LIMIT 0, 10";
  $result = mysqli_query($conn, $sql);
  if(!$result){       //SQL语句执行失败
    echo('{"code":500, "msg":"db execute err"}');
  }else {
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    echo json_encode($set);
  }
  
}
