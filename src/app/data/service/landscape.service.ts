import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangType } from '@app/model/language.model';
import { map } from 'rxjs/operators';
import { LandscapeMdoel } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LandscapeService {
  constructor(private http: HttpClient) {}

  getAll(lang: LangType) {
    return this.http.get<LandscapeMdoel[]>(
      `/assets/api/${lang}/landscapes.json`
    );
  }

  get(lang: LangType, id: number) {
    return this.getAll(lang).pipe(map(landscapes => landscapes[id]));
  }
}
