import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../Models/customer-details';
import { CustomerServiceService } from '../../Services/customer-service.service'
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  objCustomer : CustomerDetails = new CustomerDetails();
  genderArr = ['Male','Female'];
  objCustomerArray: CustomerDetails[];
  constructor(private customerservice:CustomerServiceService) { }

  ngOnInit() {
    this.getAllCustomerDetails();
  }
  saveDetails(){
    this.customerservice.saveCustomerDetails(this.objCustomer)
    .subscribe(resp => {
      if(resp)
      {
        alert("success")
        this.getAllCustomerDetails();
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
}
