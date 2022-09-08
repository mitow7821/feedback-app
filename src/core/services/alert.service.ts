import { Injectable } from '@angular/core';
import { AlertType } from '../enums/alert-type';
import { v4 } from 'uuid';

interface Alert {
  title: string;
  type: AlertType;
  description?: string;
  timeout?: number;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alerts: Alert[] = [];

  public openAlert(payload: Omit<Alert, 'id'>) {
    const newAlert = { description: '', timeout: 5, id: v4(), ...payload };

    this.alerts.push(newAlert);

    setTimeout(() => {
      this.closeAlert(newAlert.id);
    }, newAlert.timeout * 1000);
  }

  public closeAlert(id: string) {
    this.alerts = this.alerts.filter((e) => e.id !== id);
  }
}
