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
@$family = $_REQUEST['family'];

@$pno = $_REQUEST['pno'];
@$pageSize = $_REQUEST['pageSize'];  //not required
if(!$pno) {
  $pno = 1;
}else {
  $pno = intval($pno);
}
if(!$pageSize) {
  $pageSize = 15;
}else {
  $pageSize = intval($pageSize);
}

if(!$type) {
  $type = '0';
}
if(!$family) {
  $family_sql = '1';
}else {
  $family_sql = "gfamily=$family"; 
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
  
  $output = [
  'recordCount' => 0,     //满足条件的总记录数
  'pageSize' => $pageSize,        //每页大小，即每页最多可以显示的记录数量
  'pageCount' => 0,       //总页数
  'pno' => $pno,          //当前数据所在页号
  'data' => null          //当前页中的数据
  ];
  require_once('../init.php');
  //获取总记录数
  $sql = "SELECT COUNT(*) FROM gamelist WHERE $family_sql";

  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_row($result);
  $output['recordCount'] = intval($row[0]);

  //计算总页数
  $pageCount = ceil($output['recordCount']/$output['pageSize']);
  if($pno > $pageCount) {
    echo('{"code":501, "msg":"page number overflow"}');
  }else {
  $output['pageCount'] = $pageCount;
  
  //获取指定页中的数据
  $start = ($output['pno']-1)*$output['pageSize'];
  $count = $output['pageSize'];
  $sql = "
    SELECT gid, gname, gscore, gscore_andriod, gscore_ios, gintro, gicon_360 , gtop_img, did, dname, fid, fname FROM gamelist as t1 
    INNER JOIN familylist as t2 on t1.gfamily=t2.fid 
    INNER JOIN developerlist as t3 on t1.gdeveloper=t3.did
    WHERE $family_sql ORDER BY $scoreType DESC LIMIT $start, $count";
  $result = mysqli_query($conn,$sql);
  
  if(!$result){       //SQL语句执行失败
    echo('{"code":500, "msg":"db execute err"}');
  }else {
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row) {
      $row['gtop_img'] = split('\|', $row['gtop_img']);
    }
    
    $output['data'] = $set;
    echo json_encode($output);
  }
}
  
}


