import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/myHttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tops',
  templateUrl: 'tops.component.html'
})

export class TopsComponent implements OnInit {

  topsType = 1;
  topsFamily = 1;
  topsList: Array<any> = [];

  pno: number;
  hasMoreRecommend = false;

  constructor(private myHttp: MyHttpService) { }

  ngOnInit() {
    this.pno = 1;
    this.getIndexTops(0, 0, false);
  }

  getIndexTops(type, family, isTypeChange) {
    if (this.topsType !== type || this.topsFamily !== family) {
      this.pno = 1;
      this.topsList = [];
    }else if (isTypeChange) {
      return;
    }
      this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/tops.php?type=' + type + '&family=' + family + '&pno=' + this.pno)
      .subscribe((result: any) => {
        console.log(result);
        if (this.pno === result.pageCount) {
          this.hasMoreRecommend = false;
          console.log('no more recommend');
        }else {
          this.hasMoreRecommend = true;
          console.log('has more recommend');
          this.pno++;
        }
        this.topsFamily = family;
        this.topsType = type;
        this.topsList.push(...result.data);
      });
  }
}
