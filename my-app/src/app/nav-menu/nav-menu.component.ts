import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  navList=[
    {
      id:1,
      value:'home'
    },
    {
      id:2,
      value:'store'
    },
    {
      id:3,
      value:'info'
    },
    {
      id:4,
      value:'contact us'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
