import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyHttpService } from '../utility/service/myHttp.service';


@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
  detailMsg;
  versonMsg;
  developer: Array<any> = [];
  family: Array<any> = [];
  constructor(private aRoute: ActivatedRoute, private myHttp: MyHttpService) { }

  ngOnInit() {
    this.aRoute.params.subscribe((data: any) => {
       console.log(data.gid);
       window.scrollTo(0, 0);
       this.getDetailMsg(data.gid);
       this.getVersonMsg(data.gid);
    });
  }

  getDetailMsg(gid) {
    this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/detail.php?gid=' + gid)
    .subscribe((result: any) => {
      console.log('Detail', result);
      this.detailMsg = result;
      this.getDetailMore('developer', result.gdeveloper);
      this.getDetailMore('family', result.gfamily);
    });
  }

  getVersonMsg(gid) {
    this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/verson.php?gid=' + gid)
    .subscribe((result: any) => {
      console.log('verson', result);
      result.vdateString = new Date(parseInt(result.vdate, 10)).toLocaleDateString();
      this.versonMsg = result;
    });
  }

  getDetailMore(type, id) {
    this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/detail_more.php?type=' + id)
    .subscribe((result: any) => {
      console.log(type, result);
      this[type] = result;
    });
  }

  download(gid) {
    this.myHttp.sendRequest(this.myHttp.hostName + 'data/game/download.php?gid=' + gid)
    .subscribe((result: any) => {
      console.log(result);
      if (result.code === 200) {
        this.detailMsg.download_count++;
      }
    });
  }
}
