import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '@app/service/theme.service';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, tap, takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('snav', { static: true }) snav: MatSidenav;
  menuData$: Observable<any[]>;
  isMobile$: Observable<boolean>;
  overlayContainer: OverlayContainer;
  theme = 'my-light-theme';
  menuData = [
    {
      name: 'menu.home',
      url: '/dashboard/home',
      subMenus: []
    },
    {
      name: 'menu.about',
      url: '/about',
      subMenus: []
    },
    {
      name: 'menu.contact',
      url: '/contact',
      subMenus: []
    },
  ];

  private destory = new Subject();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (this.overlayContainer) {
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }

    this.themeService
      .getDarkTheme()
      .pipe(takeUntil(this.destory))
      .subscribe(theme => {
        this.theme = theme ? 'my-dark-theme' : 'my-light-theme';

        if (this.overlayContainer) {
          const overlayContainerClasses = this.overlayContainer.getContainerElement()
            .classList;
          const themeClassesToRemove = Array.from(
            overlayContainerClasses
          ).filter((item: string) => item.includes('-theme'));
          if (themeClassesToRemove.length) {
            overlayContainerClasses.remove(...themeClassesToRemove);
          }
          overlayContainerClasses.add(this.theme);
        }
      });

    this.isMobile$ = this.breakpointObserver
      .observe('(max-width: 1023px)')
      .pipe(
        map(match => match.matches),
        tap(isMobile => {
          if (!isMobile) {
            this.snav.close();
          }
        }),
        takeUntil(this.destory)
      );
  }

  ngOnDestroy(): void {
    this.destory.next();
    this.destory.complete();
  }
}
