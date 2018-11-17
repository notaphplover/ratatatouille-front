export enum NotificationType {
  Error,
  Information,
  Warning
}

export class NotificationModel {
  /**
   * @var string Notification message.
   */
  protected message: string;

  /**
   * @var type Notification type.
   */
  protected type: NotificationType;

  constructor(message: string, type: NotificationType) {
    this.message = message;
    this.type = type;
  }

  /**
   * Gets the notification message.
   * @returns notification message.
   */
  public getMessage(): string {
    return this.message;
  }

  /**
   * Obtains the message type.
   * @returns message type.
   */
  public getType(): NotificationType {
    return this.type;
  }
}
