import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerGetService} from './CustomerGetService';
import { Http, RequestOptions, Jsonp  } from '@angular/http';
// import { Injectable } from '@angular/core';
// import { do } fromHttpHeaderstors';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth/auth.service';

import {Customer} from './Customer';
import { CUSTOM_BUTTON_TYPES } from '@clr/angular';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})

export class GetCustomerComponent implements OnInit {
  customers$: Observable<Customer[]>;
  custo: Customer[];
  constructor(private http: HttpClient, public auth: AuthService, public CustService: CustomerGetService) { }


  ngOnInit(): void {
               // const headers = new HttpHeaders();
               // const authstr = 'Authorization';
              // tslint:disable-next-line:max-line-length
              // const authtoken =  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRNRFkzUkRVNVJqSTVRVE13TVRFMlJESXlNalZDUmpReU16VTVNa0UxTURFMlJESkZNZyJ9.eyJpc3MiOiJodHRwczovL3MzNTc5NDUyLmF1dGgwLmNvbS8iLCJzdWIiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9vNW5tdWRldDNiLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RldiIsImlhdCI6MTUzNzM1MjM4MSwiZXhwIjoxNTM3NDM4NzgxLCJhenAiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.w2thW_jLxY9-yX-m1UtArQPdHls7ru43d46kZLgA1sYrP4bx9_LqCNJM0vWHA8n1jgINaZIWHmtgdsHeu2jbnuZE-rPuULqdSqSM5WMlLqcMKnbEw9QVyg0j5ZvrEnl_tvOQ0OnDWSBuMuMOLFCOBHntpk32VNF_ZzXiC1v8x_TJCD2IQl4y8sd86p8pZIFpYU1KhYJblzi6gBLgBXk-yejgva66x0p7c2BozThuCX2mJNi6pxUbLQZFu4DMckDZqs4Uo7GuvaOUYk5YEyVx6NZ0f1ji84GDEoxacZA56MEEiOcHQD-K0fEvr5mSjCIVS1QuIi8lnqpGL0G9s9z_RA';
              // const headers = new HttpHeaders({authstr: authtoken});
               // const headerss = new HttpHeaders().append(authstr, authtoken);
              // const headerDict = {
                // tslint:disable-next-line:max-line-length
                // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRNRFkzUkRVNVJqSTVRVE13TVRFMlJESXlNalZDUmpReU16VTVNa0UxTURFMlJESkZNZyJ9.eyJpc3MiOiJodHRwczovL3MzNTc5NDUyLmF1dGgwLmNvbS8iLCJzdWIiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9vNW5tdWRldDNiLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RldiIsImlhdCI6MTUzNzM1MjM4MSwiZXhwIjoxNTM3NDM4NzgxLCJhenAiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.w2thW_jLxY9-yX-m1UtArQPdHls7ru43d46kZLgA1sYrP4bx9_LqCNJM0vWHA8n1jgINaZIWHmtgdsHeu2jbnuZE-rPuULqdSqSM5WMlLqcMKnbEw9QVyg0j5ZvrEnl_tvOQ0OnDWSBuMuMOLFCOBHntpk32VNF_ZzXiC1v8x_TJCD2IQl4y8sd86p8pZIFpYU1KhYJblzi6gBLgBXk-yejgva66x0p7c2BozThuCX2mJNi6pxUbLQZFu4DMckDZqs4Uo7GuvaOUYk5YEyVx6NZ0f1ji84GDEoxacZA56MEEiOcHQD-K0fEvr5mSjCIVS1QuIi8lnqpGL0G9s9z_RA'
              // };
              // const requestOptions = {headers: new HttpHeaders(headerDict)};
              // const options = new RequestOptions({headers: headers});
             // const headers = new Headers();
             // tslint:disable-next-line:max-line-length
             // headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRNRFkzUkRVNVJqSTVRVE13TVRFMlJESXlNalZDUmpReU16VTVNa0UxTURFMlJESkZNZyJ9.eyJpc3MiOiJodHRwczovL3MzNTc5NDUyLmF1dGgwLmNvbS8iLCJzdWIiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9vNW5tdWRldDNiLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RldiIsImlhdCI6MTUzNzM1MjM4MSwiZXhwIjoxNTM3NDM4NzgxLCJhenAiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.w2thW_jLxY9-yX-m1UtArQPdHls7ru43d46kZLgA1sYrP4bx9_LqCNJM0vWHA8n1jgINaZIWHmtgdsHeu2jbnuZE-rPuULqdSqSM5WMlLqcMKnbEw9QVyg0j5ZvrEnl_tvOQ0OnDWSBuMuMOLFCOBHntpk32VNF_ZzXiC1v8x_TJCD2IQl4y8sd86p8pZIFpYU1KhYJblzi6gBLgBXk-yejgva66x0p7c2BozThuCX2mJNi6pxUbLQZFu4DMckDZqs4Uo7GuvaOUYk5YEyVx6NZ0f1ji84GDEoxacZA56MEEiOcHQD-K0fEvr5mSjCIVS1QuIi8lnqpGL0G9s9z_RA');
            //  this.customers$ = this.http
            // .get<Customer[]>('https://o5nmudet3b.execute-api.us-east-2.amazonaws.com/dev/clients', {headers : headerss})
            // .map(data => _.values(data))
            // .do(console.log);
             this.getCustomers();
             console.log('ewgew');
             // console.log(this.custo.length);
  }


  getCustomers() {
    this.CustService.getCustomers()
    .subscribe(custs => {
      this.custo = (custs) ;
    });

  }

}
