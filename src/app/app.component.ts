import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { APP_NAME } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_NAME + ', the best way to manage a restaurant';

  /**
   * @var Title service.
   */
  protected titleService: Title;

  /**
   * @var TranslateService translator service
   */
  protected translatorService: TranslateService;

  public constructor(titleService: Title, translatorService: TranslateService) {
    this.titleService = titleService;
    this.translatorService = translatorService;

    this.setUpTranslator();
    this.titleService.setTitle(this.title);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  private setUpTranslator(): void {
    this.translatorService.addLangs(['en', 'es']);
    this.translatorService.setDefaultLang('en');

    const browserLang = this.translatorService.getBrowserLang();
    this.translatorService.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
