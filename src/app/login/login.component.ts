import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/myHttp.service';
import { CookieService } from '../utility/service/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'Login.component.html'
})

export class LoginComponent implements OnInit {
  isLoginPage = true;
  isUserLogin = false;

  login_uname = '';
  login_upwd = '';

  register_uname = '';
  register_upwd1 = '';
  register_upwd2 = '';

  constructor(private myHttp: MyHttpService, private myCookie: CookieService, private myRouter: Router) { }

  ngOnInit() {
    if (this.myCookie.getCookie('loginId') !== '') {
      this.isUserLogin = true;
    }
  }

  changeLoginPage() {
    this.isLoginPage = !this.isLoginPage;
  }

  loginClick() {
    if (this.login_uname === '' || this.login_upwd === '') {
      window.alert('用户名或密码不能为空');
    }else {
      this.myHttp.sendRequest('http://127.0.0.1/data/user/login.php?uname=' + this.login_uname + '&upwd=' + this.login_upwd)
      .subscribe((result: any) => {
        console.log(result);
        if (result.code === 200) {
          window.alert('登陆成功, 2秒后跳转到主页');
          setTimeout(() => {
            this.myRouter.navigate(['/index']);
          }, 2000);
        }else {
          window.alert('用户名或密码错误');
        }
      });
    }
  }

  registerClick() {
    
  }

}
