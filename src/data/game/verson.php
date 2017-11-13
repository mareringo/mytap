<?php
/**
* 根据游戏编号gid查询游戏的当前版本信息
* 参数： gid
* 返回：{ ... }
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../header_init.php');

@$gid = $_REQUEST['gid'];
if(!$gid){
  $gid = 1;
}

require_once('../init.php');
$output = [];
//读取游戏的基本信息
$sql = "SELECT * FROM versonlist WHERE gid=$gid LIMIT 1";
$result = mysqli_query($conn, $sql);
$output = mysqli_fetch_assoc($result);

echo json_encode($output);