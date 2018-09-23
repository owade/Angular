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
     authtoken =  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRNRFkzUkRVNVJqSTVRVE13TVRFMlJESXlNalZDUmpReU16VTVNa0UxTURFMlJESkZNZyJ9.eyJpc3MiOiJodHRwczovL3MzNTc5NDUyLmF1dGgwLmNvbS8iLCJzdWIiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9vNW5tdWRldDNiLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RldiIsImlhdCI6MTUzNzcwMjY1NSwiZXhwIjoxNTM3NzkyNjU1LCJhenAiOiJhVTZRVldwQmQ4bTBnWUpQU1oxUjdOaktyT25JM0h2QiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.2ul1qXLnJECHnAYapb7YZrzGY1-DacFBgKQs1R2cM_NNuQoQ8XDsxMA0Q-Si8Y1NVbDe3N078qNzdCWs9l3KimeU3iMcxhfcyoKnoHRTXYmWfXBGb1FG0o0ybKSwGE2vP94LPFQmjXyD6zbjl3HtWqw0DVLpXIlcPYQ_BOg--AOUS5Y_5q6luPHqXJh2DMwytKqTl6zyB2w_OQYKU90ogZafz8I0tZoX304Up_Xan-OGjXeK0xEuf4xHCIazZXBCXACUShu5e1Z1e96dke9FfIlENJogAyoZ6wIFSvhRrzVjKKojxdRFeLlrI2YUfFdzVzIFkPMlNzfoPnhWflQOzQ';
    // const headers = new HttpHeaders({authstr: authtoken});
     headerss = new HttpHeaders().append(this.authstr, this.authtoken);
    getCustomers() {
      return this.http.get<Customer[]>('https://o5nmudet3b.execute-api.us-east-2.amazonaws.com/dev/clients', {headers : this.headerss})
      .map(res => (res)).do(console.log);
    }


}
