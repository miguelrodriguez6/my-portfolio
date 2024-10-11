import { Component } from '@angular/core';
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  constructor(readonly navigationService: NavigationService) {
  }
}
