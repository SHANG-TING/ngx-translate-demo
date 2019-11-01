import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  setDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme$.next(isDarkTheme);
  }

  getDarkTheme(): Observable<boolean> {
    return this.isDarkTheme$;
  }
}
