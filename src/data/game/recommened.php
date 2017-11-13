<?php 
/**
 * 获取推荐游戏分页列表：
 * 接收参数：pno
 * 返回推荐游戏集合
 * 集合中每个游戏包括的健有eid, gid, recommened_img, recommened_into
 * 如：{"uid":10, "uname":"dingding"}
 */

header('Content-Type: application/json;charset=UTF-8');

require_once('../header_init.php');
@$pno = $_REQUEST['pno'];
@$pageSize = $_REQUEST['pageSize'];
if(!$pno) {
  $pno = 1;
}else {
  $pno = intval($pno);
}
if(!$pageSize) {
  $pageSize = 10;
}else {
  $pageSize = intval($pageSize);
}

$output = [
  'recordCount' => 0,     //满足条件的总记录数
  'pageSize' => $pageSize,        //每页大小，即每页最多可以显示的记录数量
  'pageCount' => 0,       //总页数
  'pno' => $pno,          //当前数据所在页号
  'data' => null          //当前页中的数据
];
require_once('../init.php');
//获取总记录数
$sql = "SELECT COUNT(*) FROM recommendlist";

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
  $sql = "SELECT eid, gid, title, image, intro FROM recommendlist ORDER BY rid DESC LIMIT $start, $count";
  $result = mysqli_query($conn,$sql);
  
  if(!$result){       //SQL语句执行失败
    echo('{"code":500, "msg":"db execute err"}');
  }else {
    for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
    $output['data'] = $set;
    echo json_encode($output);
  }
}
