import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '@app/service/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() value;
  @Input() menu;
  @Input() isMobile;
  isDarkTheme$: Observable<boolean>;

  get currentLang() {
    return this.translateService.currentLang;
  }

  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  useLang(lang: 'en' | 'zh-tw') {
    this.translateService.use(lang);
  }
}
