import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endpoints } from './app.constants';
import { ILoginPostResponseDTO, ILoginPostRequestDTO } from 'src/models/api/login.model';
import { ResponseManagerService } from './response-manager.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * @var HttpClient HTTP client to send requests.
   */
  protected httpClient: HttpClient;

  /**
   * @var ResponseManagerService Response manager service.
   */
  protected responseManager: ResponseManagerService;

  /**
   * @param httpClient HTTP client.
   * @param responseManager HTTP Response manager.
   */
  constructor(httpClient: HttpClient, responseManager: ResponseManagerService) {
    this.httpClient = httpClient;
    this.responseManager = responseManager;
  }

  /**
   * Request a login post.
   *
   * @param username Username.
   * @param password Password.
   *
   * @returns Promise fullfilled once a good Response (HTTP 200 family) returns.
   */
  public loginPost(
    request: ILoginPostRequestDTO,
    onWarning: (msg: string) => void = null,
    onError: (msg: string) => void = null
  ): Promise<ILoginPostResponseDTO> {
    return this.responseManager.manageHttpResponse(
      this.httpClient.post<ILoginPostResponseDTO>(
        environment.apiUrl + endpoints.login,
        request
      ),
      onWarning,
      onError
    );
  }
}
