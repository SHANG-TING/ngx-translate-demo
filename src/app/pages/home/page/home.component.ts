import { Component } from '@angular/core';
import { LangType } from '@app/model/language.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LandscapeMdoel } from 'app/data/model';
import { LandscapeService } from 'app/data/service/landscape.service';
import { from, Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { MyModalComponent } from '../modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readonly langChange$ = from(this.translateService.onLangChange).pipe(
    map(({ lang }) => lang as LangType)
  );

  landscapes$: Observable<LandscapeMdoel[]> = this.langChange$.pipe(
    startWith(this.translateService.currentLang as LangType),
    switchMap(lang => this.landscapeApi.getAll(lang))
  );

  constructor(
    private modalService: NgbModal,
    private translateService: TranslateService,
    private landscapeApi: LandscapeService
  ) {}

  openMyModal() {
    const modalRef = this.modalService.open(MyModalComponent, { size: 'lg' });
    modalRef.componentInstance.id = 1;
    modalRef.result.then(result => {
      console.log(result);
    });
  }
}
