import { Photos } from './../../shared/models/home';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/shared/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public photos:Photos[]=new Array();

  private subs:Subscription=new Subscription();

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    
    this.getPhotos()
    
  }

  getPhotos(){
   this.subs= this.homeService.getPhotos().subscribe((res1:any)=>{

      res1.map((res2:any, index:any)=>{

        let azar=Math.floor(Math.random()*res1.length);

        let photo = {
          url:res1[azar].url
        }
  
        if(index<4){
          this.photos.push(photo);
        }
        
      })

    })
  }

  ngOnDestroy():void{
    
    this.subs.unsubscribe();
    
  }

}
