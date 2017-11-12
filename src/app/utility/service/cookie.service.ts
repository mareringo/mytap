import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

  constructor() { }

  setCookie(c_name, value) {
    if (document.cookie.indexOf(c_name) !== -1) {
      document.cookie = c_name + '=' + value;
    }
  }

  getCookie(c_name) {
    if (document.cookie.length > 0) {
      let c_start = document.cookie.indexOf(c_name + '=');
      if (c_start !== -1) {
        c_start = c_start + c_name.length + 1;
        let c_end = document.cookie.indexOf(';', c_start);
        if (c_end === -1) {
          c_end = document.cookie.length;
        }
        return document.cookie.substring(c_start, c_end);
      }
    }
    return '';
  }

  clearCookie(c_name) {
    if (document.cookie.indexOf(c_name) !== -1) {
      document.cookie = c_name + '=' + '' + ';expires=-1';
    }
  }
}
