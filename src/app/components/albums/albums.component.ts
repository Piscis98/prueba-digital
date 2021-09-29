import { Subscription } from 'rxjs';
import { AlbumService } from './../../shared/services/album/album.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  public albums:Album[]=new Array();

  private subs:Subscription=new Subscription();

  constructor(private albumSvc:AlbumService) { }

  ngOnInit(): void {

    this.getAllAlbums();

  }

  ngOnDestroy(){
    this.subs.unsubscribe();

  }

  getAllAlbums(){


    this.subs=this.albumSvc.getAllAlbums().subscribe((res:any)=>{
      res.map((album:Album)=>{
        let alb:Album={
          id:album.id,
          userId:album.userId,
          title:album.title,
          url:'https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg'
        }

        this.albums.push(alb);
      })
    })


  }

}
