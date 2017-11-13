# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
手动将/data目录移动到apache服务器的htdocs目录下并设置相关路径

## hostName config

/data/header_init.php中设置跨域请求头
/app/utility/service/myHttp.service.ts中设置PHP所在的域名

## database import

/sql/mytap.sql为所有数据的脚本文件，导入该文件即可

## database config

/data/init.php中设置数据库参数

## 
