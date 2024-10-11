import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    const emailData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    // this.http.post('https://api/send-email', emailData)
    //   .subscribe(response => {
    //     console.log('Email sent successfully!', response);
    //   }, error => {
    //     console.error('Error sending email', error);
    //   });

    form.reset();
  }

}
