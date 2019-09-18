import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  readonly onLangChange$ = this.translateService.onLangChange;

  // get currentLang() {
  //   const defaultLang =
  //     this.translateService.getBrowserLang() === 'zh' ? 'zh-tw' : 'en';
  //   return (sessionStorage.getItem('currentLang') || defaultLang) as LangType;
  // }
  // set currentLang(value: LangType) {
  //   sessionStorage.setItem('currentLang', value);
  // }

  constructor(private translateService: TranslateService) {}

  init() {
    // this.translateService.addLangs([...langTypeData]);
    // this.translateService.use(this.currentLang);
    // this.translateService.onLangChange.subscribe(({ lang }) => {
    //   this.currentLang = lang;
    // });
  }
}
