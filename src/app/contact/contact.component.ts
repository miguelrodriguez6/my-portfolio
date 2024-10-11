import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit(form: any) {
    const emailData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    form.reset();
  }

}
