import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetails } from '../../Models/customer-details';
import { CustomerServiceService } from '../../Services/customer-service.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  objCustomer : CustomerDetails = new CustomerDetails();
  genderArr = [{'Value':'M','Text' : 'Male'},{'Value':'F','Text' : 'Female'}];
  objCustomerArray: CustomerDetails[];
  constructor(private customerservice:CustomerServiceService) { }
  @ViewChild('form') form :NgForm;
  ngOnInit() {
    this.getAllCustomerDetails();
    console.log(document.getElementById("firstName"))  
  }
  saveDetails(){
    this.customerservice.saveCustomerDetails(this.objCustomer)
    .subscribe(resp => {
      if(resp)
      {
        alert("success")
        this.getAllCustomerDetails();
        this.form.reset();
      }
               
    }
    ,error => {
      alert("error")
    } 
    );


    // this.customerservice.GetCustomer("naresh").subscribe(
    //   resp => {
    //     if(resp.STATUS)
    //     {
    //       alert("get")
    //     }
    //     else
    //     {
    //       alert("error");
    //     }            
    //   }
    //   ,error => {
    //     alert("error")
    //   }
    // );

  }
  getAllCustomerDetails(){
    this.customerservice.GetAllCustomer()
    .subscribe((data) => {
        this.objCustomerArray = data.DATA;
    }
    ,
    (error)=>{

    })
  }
  edit(objCustomerDetails : CustomerDetails){
    this.objCustomer = objCustomerDetails;    

  }
}
