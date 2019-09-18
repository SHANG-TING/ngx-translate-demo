import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '@app/service/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() value;
  @Input() menu;

  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  useLang(lang: 'en' | 'zh-tw') {
    this.translateService.use(lang);
  }
}
