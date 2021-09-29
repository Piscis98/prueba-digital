import { Subscription } from 'rxjs';
import { PostService } from './../../services/post/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  postForm!: FormGroup;
  fecha = Date.now();
  subs:Subscription=new Subscription();

  constructor(private postSvc:PostService) { 
    this.postForm=this.craetePostForm();
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    // this.subs.unsubscribe();
  }

  createPost(){
   this.subs=this.postSvc.createPost(this.postForm.value).subscribe((res:any)=>{

    console.log(res);
    

   })
  }

  craetePostForm(){
    return new FormGroup({
      userId:new FormControl(1),
      id:new FormControl(this.fecha),
      title:new FormControl('', [Validators.required]),
      body:new FormControl('', [Validators.required]),

    })
  }

  get title():any{
    return this.postForm.get('title');
  }
  get body():any{
    return this.postForm.get('body');
  }

}
