import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { app_config } from '../config';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {
    videoData:any;
    url=app_config.api_url;
    videoList = [];
  
  currentUser: any;
  constructor(private actroute:ActivatedRoute , private videoService:VideoService) {

   }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user') as string);
    let id=this.actroute.snapshot.paramMap.get('videoId');
   this.videoService.getVideoById(id).subscribe(( data )=>{
     console.log(data);
     this.videoData=data;
   })
   this.fetchVideo();
  }

  fetchVideo() {
    this.videoService
      .getVideosByUser(this.currentUser._id)
      .subscribe((data: any) => {
        this.videoList = data;
        console.log(this.videoList);
      });
  }


  
}
