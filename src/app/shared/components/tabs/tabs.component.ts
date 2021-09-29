import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  navLinks = [
    { path: 'home', label: 'Home', icon:'home' },
    { path: 'users', label: 'Users', icon:'group' },
    { path: 'albums', label: 'Albums', icon:'collections' },
    { path: 'posts', label: 'Posts', icon:'photo_camera' },
  ];

  active=0;

  constructor() { 

    this.active=0;

  }

  ngOnInit(): void {
  }

  selectedTabChange(index:any){

    this.active=index;
    

  }

}
