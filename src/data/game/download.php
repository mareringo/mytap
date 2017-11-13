<?php
/**
* 根据游戏编号gid在游戏表中下载量+1
* 参数： gid
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../header_init.php');

@$gid = $_REQUEST['gid'] or die('{"code":401,"msg":"gid required"}');

require_once('../init.php');
$sql = "update gamelist set download_count=download_count+1 where gid=$gid";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL语句执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $count = mysqli_affected_rows($conn);
  if($count!==1){     //用户编号不存在
    echo('{"code":201, "msg":"download err"}');
  }else {             //修改成功
    echo('{"code":200, "msg":"download succ"}');
  }
}

