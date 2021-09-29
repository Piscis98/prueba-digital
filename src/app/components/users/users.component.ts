import { User } from './../../shared/models/user';
import { Subscription } from 'rxjs';
import { UserService } from './../../shared/services/user/user.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'email', 'company'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private subs : Subscription=new Subscription();
  filter = new FormControl('');

  constructor(private userSvc:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnDestroy():void{
    this.subs.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers(){
   this.subs=this.userSvc.getAllUsers().subscribe((res:any)=>{
     
    this.dataSource.data=res;
    this.dataSource.paginator = this.paginator;
     
   })
  }


  applyFilter() {
    const filterValue = this.filter.value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
