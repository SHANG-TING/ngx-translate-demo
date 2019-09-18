import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LangType, langTypeData } from '@app/model/language.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destory$ = new Subject();

  get currentLang() {
    return this.sotrage.getItem('currentLang') as LangType;
  }
  set currentLang(value: LangType) {
    this.sotrage.setItem('currentLang', value);
  }

  constructor(
    private title: Title,
    private sotrage: Storage,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    const defaultLang =
      this.translateService.getBrowserLang() === 'zh' ? 'zh-tw' : 'en';

    this.translateService.addLangs([...langTypeData]);
    this.translateService.use(this.currentLang || defaultLang);

    this.translateService.onLangChange
      .pipe(takeUntil(this.destory$))
      .subscribe(({ lang, translations }) => {
        this.title.setTitle(translations['title']);
        this.currentLang = lang as LangType;
      });
  }

  ngOnDestroy() {
    this.destory$.next();
    this.destory$.complete();
  }
}
