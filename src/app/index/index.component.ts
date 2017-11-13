import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/myHttp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html'
})

export class IndexComponent implements OnInit {

  recommendList: Array<any> = [];
  indexTops: Array<any> = [];
  indexType = -1;
  // isNavTabsActive = -1;
  pno: number;
  hasMoreRecommend = false;
  firstRecommend;
  constructor(private myHttp: MyHttpService) { }

  ngOnInit() {
    this.pno = 1;
    // 初始时传入true会将数组头拷贝并出栈
    this.getRecommend(true);
    this.getIndexTops(0);
  }

  getRecommend(isFirstPage) {
    this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/recommened.php?pageSize=10&pno=' + this.pno)
    .subscribe((result: any) => {
      console.log(result);
      // 判断是否还有更多数据
      if (this.pno === result.pageCount) {
        this.hasMoreRecommend = false;
        console.log('no more recommend');
      }else {
        this.hasMoreRecommend = true;
        console.log('has more recommend');
        this.pno++;
      }
      if (isFirstPage) {
        this.firstRecommend = result.data[0];
        result.data.shift();
      }
      this.recommendList.push(...result.data);
    });
  }

  getIndexTops(type) {
    if (this.indexType === type) {
      return;
    } else {
      this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/index_tops.php?type=' + type)
      .subscribe((result: any) => {
        console.log(result);
        this.indexType = type;
        this.indexTops = result;
      });
    }
  }


}
