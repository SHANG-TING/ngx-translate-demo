import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { LangType } from '@app/model/language.model';
import { TranslateService } from '@ngx-translate/core';
import { LandscapeMdoel } from 'app/data/model';
import { LandscapeService } from 'app/data/service/landscape.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LandscapeResolver implements Resolve<LandscapeMdoel> {
  constructor(
    private router: Router,
    private landscapeApi: LandscapeService,
    private translateService: TranslateService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.landscapeApi
      .get(this.translateService.currentLang as LangType, route.params['id'])
      .pipe(catchError(err => this.router.navigateByUrl('/')));
  }
}
