import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CustomerDetails } from '../Models/customer-details';




@Injectable({
  providedIn: 'root'
})

export class CustomerServiceService {

  constructor(private http:HttpClient) {
  
   }
   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  saveCustomerDetails (customer: CustomerDetails) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.post(environment.BASE_API_URL +'api/Customer/SaveCustomer', customer,httpOptions)
  }

  GetCustomer(CustId:number){
    return this.http.get<any>( environment.BASE_API_URL +'api/Customer/GetCustDetails?CustId='+CustId );
  };
  GetAllCustomer(){
    return this.http.get<any>( environment.BASE_API_URL +'api/Customer/GetAllCustomer' );
  };
}
