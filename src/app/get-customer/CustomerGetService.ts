import { Injectable } from '@angular/core';
import { Http, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import * as _ from 'lodash';
import {Customer} from './Customer';

@Injectable()
export class CustomerGetService {

  constructor(private http: HttpClient) {

  }

    // customers = [];
     authstr = 'Authorization';
    // tslint:disable-next-line:max-line-length
     authtoken =  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRNRFkzUkRVNVJqSTVRVE13TVRFMlJESXlNalZDUmpReU16VTVNa0UxTURFMlJESkZNZyJ9.eyJpc3MiOiJodHRwczovL3MzNTc5NDUyLmF1dGgwLmNvbS8iLCJzdWIiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9vNW5tdWRldDNiLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RldiIsImlhdCI6MTUzNzUwOTU1NCwiZXhwIjoxNTM3NTk1OTU0LCJhenAiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.3qAu4SHKp3_jTOyXZp6TjbvlKf4rt8YGrA4U-6_5dWZBPh3ZYEJHJbaAhCzbEDqZPrIuICbXeS4e_VTvoMPrSM0uhVQhlBxufefAVSGgZwb581ujy7O-2yG5cV2ehzbkPGrwZSwpESHntkMaHUCsZTd8P14gBFn4q_7iB1Ld7RBqAmsrPOdlAO7uOzAU45b8q_vcGODO7iZ-zaJs9ii6ykKJ4Fa_VcAmASaBEv5SDDCY19fyx4TA-z0UWyb8RP5kC-CoN3j9Rxa71rhhrb7Pyxuqei7TPtHYfpnrq6TQY68HpeLw6MTy8Sfdxuyij6ENwoZT5ibBbThOfuUHkcViTQ';
    // const headers = new HttpHeaders({authstr: authtoken});
     headerss = new HttpHeaders().append(this.authstr, this.authtoken);
    getCustomers() {
      return this.http.get<Customer[]>('https://o5nmudet3b.execute-api.us-east-2.amazonaws.com/dev/clients', {headers : this.headerss})
      .map(res => (res)).do(console.log);
    }


}
