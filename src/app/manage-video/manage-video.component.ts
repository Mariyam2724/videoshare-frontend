import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { app_config } from '../config';
import { UserService } from '../service/user.service';
import { VideoService } from '../service/video.service';


@Component({
  selector: 'app-manage-video',
  templateUrl: './manage-video.component.html',
  styleUrls: ['./manage-video.component.css']
})
export class ManageVideoComponent implements OnInit {
  videoList=[];
  sharedVideoList=[];
  currentUser:any;
  url= app_config.api_url;
  userEmail:any;
  constructor(private  videoService:VideoService, private userService:UserService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user') as string);
    this.fetchVideo();
  document.body.classList.add('manage-video');
  
  }
  ngOnDestroy(){
    document.body.classList.remove('manage-video');

  }



  fetchVideo(){
   this.videoService.getVideosByUser(this.currentUser._id)
   .subscribe((data:any)=>{
       this.videoList=data;
       console.log(this.videoList);
   })
  }

  fetchSharedVideos(){
    this.videoService.getSharedVideos(this.currentUser._id)
    .subscribe((data:any)=>{
        this.sharedVideoList=data;
        console.log(this.sharedVideoList);
    })
  }

  deleteVideo(id:any){
    this.videoService.deleteVideo(id)
    .subscribe((data:any)=>{
       
        console.log(data);
        Swal.fire({
          icon:'warning',
          title:'video deleted'
        })
        this.fetchVideo();
    })
  }

  shareToUser(video:any,email:any){
     this.userService.getUserByEmail(email).subscribe(( userData:any )=>{
       if(userData){
       this.videoService.addUser(video._id,{shared:userData._id}).subscribe((res)=>{
         console.log(res);
         this.fetchVideo();
       })
       }
       else{
         Swal.fire({
           icon:'error',
           title:'invalid email',
           text:'please enter valid email'
         })
       }
     })
  }

  // sharedWithMe(){
    
  // }

}
