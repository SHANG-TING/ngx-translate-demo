import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'app/app.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    private translateService: TranslateService,

    private app: AppComponent
  ) {}

  ngOnInit(): void {
    // this.translateService.addLangs(['en', 'zh-tw']);
    this.translateService.defaultLang = 'en';
    this.translateService.use(this.app.translateService.currentLang);

    this.app.translateService.onLangChange.subscribe(({ lang }) => {
      this.translateService.use(lang);
    });
  }

  sayHello() {
    Swal.fire(
      this.translateService.instant('hello', {
        value: this.translateService.instant('world')
      })
    );
  }

  toggleLang() {
    this.translateService.use(
      this.translateService.currentLang === 'zh-tw' ? 'en' : 'zh-tw'
    );
  }
}
