import { Component } from '@angular/core';
import { AlertType } from 'src/core/enums/alert-type';
import { AlertService } from 'src/core/services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  constructor(public alertService: AlertService) {}

  getBorderColor(alertType: AlertType) {
    switch (alertType) {
      case AlertType.ERROR:
        return 'red';

      case AlertType.SUCCESS:
        return 'green';

      case AlertType.WARNING:
        return 'orange';
    }
  }
}
