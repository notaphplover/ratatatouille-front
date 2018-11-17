import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpCodes } from './app.constants';
import { TranslateService } from '@ngx-translate/core';
import { ApiError } from 'src/models/api/api.error.interface';

@Injectable({
  providedIn: 'root'
})
export class ResponseManagerService {

  /**
   * @var TranslateService translation service.
   */
  protected translationService: TranslateService;

  constructor(translationService: TranslateService) {
    this.translationService = translationService;
  }

  /**
   * Manages an HTTP response.
   *
   * @param response HTTP response to manage.
   * @param onWarning Callback invoked if a warning should be displayed.
   * @param onError Callback invoked if an error should be displayed.
   * @returns Promise fullfilled if a response is returned with no errors nor warnings.
   */
  public manageHttpResponse<T>(
    response: Observable<T>,
    onWarning: (msg: string) => void,
    onError: (msg: string) => void
  ): Promise<T> {
    const that = this;
    return new Promise<T>(function(resolve, reject) {
      response.subscribe(
        res => {
          resolve(res);
        },
        err => {
          switch (err.status) {
            case httpCodes.FORBIDDEN:
              that.manageHttpResponseCase('global.access-denied', onWarning, err);
              break;
            case httpCodes.NOT_FOUND:
              that.manageHttpResponseCase('global.not-found', onWarning, err);
              break;
            default:
              that.manageHttpResponseCase('global.unexpected-error', onError, err);
          }
          reject(err);
        }
      );
    });
  }

  private manageHttpResponseCase(
    alternativeMessageCode: string,
    callback: (msg: string) => void,
    err: any
  ) {
    if (null !== callback) {
      if (null !== err.error) {
        const apiError = err.error as ApiError;
        callback(apiError.error);
      } else {
        this.translationService
          .get(alternativeMessageCode)
          .subscribe(res => callback(res));
      }
    }
  }
}
