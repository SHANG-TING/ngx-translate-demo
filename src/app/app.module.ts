import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from '@pages/auth/auth.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AuthLayoutComponent,
  ContentLayoutComponent,
  FooterComponent,
  MenuComponent,
  NavComponent
} from './layout';

const LAYOUT_COMPONENTS = [
  AuthLayoutComponent,
  ContentLayoutComponent,
  FooterComponent,
  MenuComponent,
  NavComponent
];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, LAYOUT_COMPONENTS],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    {
      provide: Storage,
      useValue: sessionStorage
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
