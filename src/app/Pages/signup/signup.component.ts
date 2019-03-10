import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { UserDetails } from '../../Models/user-details';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  objUserDetails : UserDetails = new UserDetails();
  constructor(private LoginService:LoginService) { }

  ngOnInit() {
  }

  SaveUserLoginDetails(){
    this.LoginService.SaveUserDetails(this.objUserDetails)
    .subscribe(resp => {
      if(resp)
      {
        alert("success")
      }
               
    }
    ,error => {
      alert("error")
    } 
    );

}
