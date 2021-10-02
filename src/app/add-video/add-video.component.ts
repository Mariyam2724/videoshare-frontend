import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { VideoService } from '../service/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css'],
})
export class AddVideoComponent implements OnInit {
  videoForm: any;
  currentUser: any;
  thumbnail: any = '';
  videoFile: any = '';

  constructor(
    private fb: FormBuilder,
    private videoservice: VideoService,
    private userservice: UserService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user') as string);
    this.initForm();

    document.body.classList.add('add-video');
  }

  ngOnDestroy() {
    document.body.classList.remove('add-video');
  }

  initForm() {
    this.videoForm = this.fb.group({
      user: this.currentUser._id,
      file: '',
      thumbnail: '',
      created: new Date(),
      shared: Array,
      title: '',
      public: false,
    });
  }

  videoSubmit() {
    console.log(this.videoForm.value);
    let formdata = this.videoForm.value;
    formdata.file = this.videoFile;
    formdata.thumbnail = this.thumbnail;
    console.log(formdata);
    this.videoservice.addVideo(formdata).subscribe((res) => {
      console.log(res);
     
    });

   
    Swal.fire({
      icon: 'success',
      text: 'Successfully!',
      title: 'Video Added',
    });
    this.userservice.currentUser = event;
    this.router.navigate(['/managevideo']);
    

    }

  uploadThumbnail(event: any) {
    const formdata = new FormData();
    let file = event.target.files[0];
    this.thumbnail = file.name;
    console.log(file.name);
    formdata.append('file', file);

    this.userservice.addFile(formdata).subscribe((res) => {
      console.log(res);
    });
  }

  uploadVideo(event: any) {
    const formdata = new FormData();
    let file = event.target.files[0];
    this.videoFile = file.name;

    formdata.append('file', file);

    this.userservice.addFile(formdata).subscribe((res) => {
      console.log(res);
      
    });
    
    
  
  }
  
}