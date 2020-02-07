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

  emailRequiredAlert: any = { type: 'warning', msg: `Email is required.` };
  successAlert: any = { type: 'success', msg: `Success! Message has been sent.` };
  errorAlert: any = { type: 'danger', msg: `Oops! Something went wrong. Message has not been sent.` };
  public alert: any;
  public submitMsg: string = 'Submit';
  public isWorking: boolean = false;
  public contact: Contact = {
    name: '',
    email: '',
    website: '',
    phone: '',
    message: ''
  };



  constructor(private email: EmailService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contact.email === '') {
      this.alert = this.emailRequiredAlert;
      return;
    }
    this.alert = null;
    this.isWorking = true;
    this.submitMsg = 'Sending...';
    this.email.sendContact(this.contact).subscribe(
      data => {
        this.isWorking = false;
        this.alert = this.successAlert;
        this.submitMsg = 'Submit';
      },
      error => {
        this.isWorking = false;
        this.alert = this.errorAlert;
        this.submitMsg = 'Submit';
      }
    )
  }

  onAlertClosed(): void {
    this.alert = null;
  }

}
