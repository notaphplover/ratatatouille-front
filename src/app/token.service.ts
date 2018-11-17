import { Injectable } from '@angular/core';

const tokenKey = 'auth-token';
const appStorage = localStorage;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /**
   * Obtains the user token.
   * @returns User token.
   */
  public getToken(): string {
    return appStorage.getItem(tokenKey);
  }

  /**
   * Sets the user token.
   * @param token token to set.
   */
  public setToken(token: string): void {
    appStorage.setItem(tokenKey, token);
  }
}
