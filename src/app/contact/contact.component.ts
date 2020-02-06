import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';

export interface Contact {
  name: string;
  email: string;
  website: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contact: Contact = {
    name: '',
    email: 'kari.swarthout@gmail.com',
    website: '',
    phone: '',
    message: ''
  };

  constructor(private email: EmailService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit clicked');
    this.email.sendContact(this.contact).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
