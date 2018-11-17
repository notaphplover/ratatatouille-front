import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NotificationContainerComponent } from '../notification-container/notification-container.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * @var NotificationContainerComponent notifications container.
   */
  @ViewChild(NotificationContainerComponent)
  protected notificationContainer: NotificationContainerComponent;

  constructor() {}

  ngOnInit() {
  }

}
