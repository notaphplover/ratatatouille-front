import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'src/models/notification.model';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {

  /**
   * Notification collection.
   */
  protected notifications: NotificationModel[];

  constructor() {
    this.notifications = new Array();
  }

  /**
   * Adds a new notification to the component.
   * @param notification Notification to add.
   */
  public addNotification(notification: NotificationModel) {
    this.notifications.push(notification);
  }

  ngOnInit() {
  }

}
