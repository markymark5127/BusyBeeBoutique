import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
    export class ContactService {

      constructor(private http: Http) {

      }

      postEmail(name: string, email: string, message: string): Observable<string> {

        const headers = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'

        });
        const options = new RequestOptions({ headers });

        const url = 'http://formspree.io/busybee19@yahoo.com';

        const data = `name=${name}&email=${email}&message=${message}`;

        return this.http.post(url, data, options)
        .pipe(map(response => {
          console.log('email sent', response);
          return response;
        })
        .catch(this.handleError)
      }

    private handleError(err) {
          // handle error
      }


    }
