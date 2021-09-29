import { DialogComponent } from './../../shared/components/dialog/dialog.component';
import { PostService } from './../../shared/services/post/post.service';
import { User } from './../../shared/models/user';
import { Subscription } from 'rxjs';
import { UserService } from './../../shared/services/user/user.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private subs : Subscription=new Subscription();
  filter = new FormControl('');

  constructor(private postSvc:PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllPosts();
    this.subs=this.postSvc.refresh$.subscribe(()=>{
      this.getAllPosts();
    })
  }

  ngOnDestroy():void{

    this.subs.unsubscribe();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter() {
    const filterValue = this.filter.value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllPosts(){
    this.subs=this.postSvc.getAllPost().subscribe((res:any)=>{
      this.dataSource.data=res;
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialog(){

    const dialogRef = this.dialog.open(DialogComponent,{
      width:'30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  }


