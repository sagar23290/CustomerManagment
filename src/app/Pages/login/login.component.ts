import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { UserDetails } from '../../Models/user-details';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  objUser : UserDetails = new UserDetails();
  constructor(private LoginService:LoginService) { }

  ngOnInit() {
  }

}
