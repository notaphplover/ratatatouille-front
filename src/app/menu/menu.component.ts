import { Component, OnInit } from '@angular/core';
import { APP_NAME } from '../app.constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  protected brandName = APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}
