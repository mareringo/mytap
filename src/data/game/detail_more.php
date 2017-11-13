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
@$developer = $_REQUEST['developer'];
@$family = $_REQUEST['family'];
if($developer) {
  $type = 'gdeveloper';
  $id = $developer;
}else if ($family){
  $type = 'gfamily';
  $id = $family;
}else {
  $type = 'gfamily';
  $id = 1;
}


  $output = [];

  require_once('../init.php');

  //1.获取轮播广告项
  $sql = "SELECT gid, gname, gscore, gicon_100 FROM gamelist WHERE {$type}={$id} ORDER BY $type DESC LIMIT 0, 8";
  $result = mysqli_query($conn, $sql);
  if(!$result){       //SQL语句执行失败
    echo('{"code":500, "msg":"db execute err"}');
  }else {
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    echo json_encode($set);
  }
  
