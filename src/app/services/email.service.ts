import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendContact(contact: Contact): Observable<any> {
    return this.http.post<Contact>('https://us-central1-portfolio-site-bbea8.cloudfunctions.net/sendMail', contact, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

}
