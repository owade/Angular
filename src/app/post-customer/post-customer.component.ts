import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import {Customer} from '../get-customer/Customer';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService) {}

  model: Customer = new Customer();

     onSubmit(employeeForm) {
        console.log(this.model);
        this.http.post<Customer>('https://o5nmudet3b.execute-api.us-east-2.amazonaws.com/dev/clients', this.model)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
        );
          employeeForm.resetForm();
    }

  ngOnInit(): void {
    // this.http.post<Customer>('http://jsonplaceholder.typicode.com/posts', {
    //   title: 'foo0099',
    //   body: 'basdv ar',
    //   userId: 5939
    // })
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log('Error occured');
    //     }
    //   );
  }

}
