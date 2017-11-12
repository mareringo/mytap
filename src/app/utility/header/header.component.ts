import { Component, OnInit, Input } from '@angular/core';
import { MyHttpService } from '../service/myHttp.service';
import { CookieService } from '../service/cookie.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})



export class HeaderComponent implements OnInit {

  @Input() activeTab="";

  // 存储用户是否登陆
  isUserLogin = false;
  userName: String = '';
  userAvatar: String = './assets/img/utility/default_avatar.png';

  // 储存头像点击下拉菜单的显示状态
  showAvatarDorpdown = false;

  constructor(private myHttp: MyHttpService, private myCookie: CookieService, private myRouter: Router, private myLocation: Location) { }

  ngOnInit() {
    if (this.myCookie.getCookie('loginId') !== '') {
      this.isUserLogin = true;
      this.userName = this.myCookie.getCookie('loginName');
      this.userAvatar = this.myCookie.getCookie('loginAvatar');
    }else {
      this.checkUserLogin();
    }
  }

  // 判断用户是否登录
  checkUserLogin() {
    // 向服务器端发起请求，请求user/session_data.php
    // 根据返回的uid是否是一个有效的值，去做判断处理
    this.myHttp.sendRequest('http://127.0.0.1/data/user/session_data.php')
    .subscribe((data: any) => {
      console.log(data);
      if (data.uid) {
        this.isUserLogin = true;
        this.myCookie.setCookie('loginId', data.uid);
        this.myCookie.setCookie('loginAvatar', data.avatar);
        this.myCookie.setCookie('loginName', data.uname);
        this.userName = data.uname;
        this.userAvatar = data.avatar;
      } else {
        this.isUserLogin = false;
        this.userName = '';
        this.userAvatar = './assets/img/utility/default_avatar.png';
      }
    });
  }

  avatarClick() {
    if (this.isUserLogin) {
      this.showAvatarDorpdown = !this.showAvatarDorpdown;
    }else {
      this.myRouter.navigate(['/login']);
    }
  }

  logout() {
    this.myHttp.sendRequest('http://127.0.0.1/data/user/logout.php')
    .subscribe((data: any) => {
      console.log(data);
      this.myCookie.clearCookie('loginId');
      this.myCookie.clearCookie('loginAvatar');
      this.myCookie.clearCookie('loginName');
      this.isUserLogin = false;
      this.userName = '';
      this.userAvatar = './assets/img/utility/default_avatar.png';
      this.showAvatarDorpdown = false;
    });
  }

}
