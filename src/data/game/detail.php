<?php
/**
* 根据游戏编号gid查询游戏的所有信息
* 参数： gid
* 返回：{ ..., "picList" {...} }
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
$sql = "SELECT gid,gname,gname_o,gdeveloper,glang,gfamily,is_ios,is_andriod,gintro_dev,gintro_editor,gintro,gicon_360,ghasvideo,gscore,gscore_ios,gscore_andriod,gscore_recently,download_count FROM gamelist WHERE gid=$gid LIMIT 1";
$result = mysqli_query($conn, $sql);
$output = mysqli_fetch_assoc($result);

//将游戏语言打散为数组
// $output['glang'] = split('\|',$output['glang']);

//读取游戏类型名
$sql = "SELECT fname FROM familylist WHERE fid = ".$output['gfamily'];
$output['gfamilyName'] = mysqli_fetch_assoc(mysqli_query($conn, $sql))['fname'];

// 读取游戏开发者名
$sql = "SELECT dname FROM developerlist WHERE did = ".$output['gdeveloper'];
$output['gdeveloperName'] = mysqli_fetch_assoc(mysqli_query($conn, $sql))['dname'];

//读取游戏的图片列表
$sql = "SELECT gimg_sm, gimg_bg FROM imglist WHERE gid=$gid";
$result = mysqli_query($conn, $sql);
for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
$output['picList'] = $set;

echo json_encode($output);