import { Component } from '@angular/core';
import { NavigationService } from 'src/core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public navigationService: NavigationService) {}
  title = 'feedback-app';
}
