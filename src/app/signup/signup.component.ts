import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm: any;  
  constructor(private fb:FormBuilder , private userservice:UserService , private router: Router) {
    console.log('component loaded');
   }
   
   ngOnInit(): void {
    this.initForm();

    document.body.classList.add('register');
  
  }
  ngOnDestroy(){
    document.body.classList.remove('register');

  }


  
  initForm(){
    this.registerForm=this.fb.group({
     fullname : '',
     email : '',
     password : '',
    });
  }
   
   
    registerSubmit(){
    console.log(this.registerForm.value);
    this.userservice.addUser( this.registerForm.value).subscribe((res) => { console.log(res) });
  
  let formdata = this.registerForm.value;
  this.userservice.getUserByEmail(formdata.email)
  .subscribe(  (data : any) => {
    console.log(data);

    if(data ){

    if(data.password ==formdata.password){
      console.log('signIn successfull');
    sessionStorage.setItem( 'user', JSON.stringify(data));
    Swal.fire({
      icon : 'success',
      title: 'Success!',
      text: 'Thanks for Signing Up! '
    })
    this.userservice.currentUser = data;
    this.router.navigate(['/managevideo']);

    
  }

}
})
}
}
  

