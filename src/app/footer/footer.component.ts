import { Component } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(readonly navigationService: NavigationService) {
  }

}
