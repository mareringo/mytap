import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {

  isActive = 2;
  info = `<h1>123</h1><br><a href="#">点我</a>`;
  constructor() { }

  ngOnInit() {
  }

  changeActive(index) {
    this.isActive = index;
  }
}
