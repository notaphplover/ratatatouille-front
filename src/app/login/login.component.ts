import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { NotificationContainerComponent } from '../notification-container/notification-container.component';
import { NotificationType, NotificationModel } from 'src/models/notification.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region Child components

  /**
   * @var NotificationContainerComponent notifications container.
   */
  @ViewChild(NotificationContainerComponent)
  protected notificationContainer: NotificationContainerComponent;

  //#endregion

  /**
   * @var LoginService Log in service
   */
  protected loginService: LoginService;

  /**
   * @var string password field.
   */
  protected password: string;

  /**
   * @var Router Angular router.
   */
  protected router: Router;

  /**
   * @var TokenService Token service used to get and set the user token.
   */
  protected tokenService: TokenService;

  /**
   * @var string username field.
   */
  protected username: string;

  /**
   * Creates a new login component.
   * @param loginService Login service.
   * @param router Router service.
   * @param tokenService Token service.
   */
  constructor(loginService: LoginService, router: Router, tokenService: TokenService) {
    this.loginService = loginService;
    this.router = router;
    this.tokenService = tokenService;

    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  public login(): void {
    const that = this;
    this
      .loginService
      .loginPost(
        {
          username: this.username,
          password: this.password
        },
        function(msg: string) {
          const notificationComponent = new NotificationModel(msg, NotificationType.Warning);
          that.notificationContainer.addNotification(notificationComponent);
        },
        function(msg: string) {
          const notificationComponent = new NotificationModel(msg, NotificationType.Error);
          that.notificationContainer.addNotification(notificationComponent);
        }
      )
      .then(function(response) {
        that.tokenService.setToken(response.token);
        that.router.navigateByUrl('/home');
      }).catch(function(err) {
        console.error('Auth error');
      })
    ;
  }
}
