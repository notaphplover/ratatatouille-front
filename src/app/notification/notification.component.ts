import { Component, Input, OnInit } from '@angular/core';
import { NotificationModel, NotificationType } from 'src/models/notification.model';

const APP_NOTIFICATION_STYLE = 'app-notification';
const APP_NOTIFICATION_ERROR_STYLE = 'bg-danger';
const APP_NOTIFICATION_INFORMATION_STYLE = 'bg-success';
const APP_NOTIFICATION_WARNING_STYLE = 'bg-warning';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  /**
   * @var Notification Notification.
   */
  @Input()
  protected notification: NotificationModel;

  constructor() {
    this.notification = null;
  }

  public getCssClass(): string {
    let cssClass = APP_NOTIFICATION_STYLE + ' ';
    switch (this.notification.getType()) {
      case NotificationType.Error:
        cssClass += APP_NOTIFICATION_ERROR_STYLE;
        break;
      case NotificationType.Information:
        cssClass += APP_NOTIFICATION_INFORMATION_STYLE;
        break;
      case NotificationType.Warning:
        cssClass += APP_NOTIFICATION_WARNING_STYLE;
        break;
      default:
    }
    return cssClass;
  }

  /**
   * Gets the notification.
   * @returns notification.
   */
  public getNotification(): NotificationModel {
    return this.notification;
  }

  /**
   * Sets the notification.
   * @param notification notification.
   */
  public setNotification(notification: NotificationModel) {
    this.notification = notification;
  }

  ngOnInit() {
  }

}
