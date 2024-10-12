import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(readonly http: HttpClient) {
  }

  onSubmit(form: any) {
    const emailData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    this.http.post('http://localhost:3000/api/send-email', emailData).subscribe(
      {
        next: (emailData) => {
          console.log('Email sent successfully!');
        },
        error: (err: any) => {
          console.error('Error sending email:', err);
        }
      }
    );

    form.reset();
  }

}
