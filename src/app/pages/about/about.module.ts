import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateCompiler,
  TranslateDefaultParser,
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '@shared/shared.module';
import { Observable, of } from 'rxjs';
import { AboutRoutingModule } from './about-routing.module';
import { langPack } from './i18n';
import { AboutComponent } from './page/about/about.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/about/', '.json');
}

export class CustomLoader implements TranslateLoader {
  langPack = {};
  constructor(_langPack: any) {
    this.langPack = _langPack;
  }
  getTranslation(lang: string): Observable<any> {
    // console.log(this.langPack[lang]);
    return of(this.langPack[lang]);
  }
}

export class CustomHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    if (params.key === 'title') {
      return 'no title';
    }
    return 'no value';
  }
}

@Injectable()
export class CustomParser extends TranslateDefaultParser {
  public interpolate(expr: string | Function, params?: any): string {
    const result: string = super.interpolate(expr, params);

    console.group('interpolate');
    console.log('expr', expr);
    console.log('params', params);
    console.log('super.interpolate(expr, params)', result);
    console.groupEnd();

    return result + 'QAQ';
  }
  getValue(target: any, key: string): any {
    const keys = super.getValue(target, key);

    console.group('getValue');
    console.log('target', target);
    console.log('key', key);
    console.log('super.getValue(target, key)', keys);
    console.groupEnd();

    return keys;
  }
}

@Injectable()
export class CustomCompiler extends TranslateCompiler {
  compile(value: string, lang: string): string | Function {
    console.group('compile');
    console.log('value');
    console.log(value);
    console.log('lang');
    console.log(lang);
    console.groupEnd();
    return value;
  }

  compileTranslations(translations: any, lang: string): any {
    console.group('compileTranslations');
    console.log('translations');
    console.log(translations);
    console.log('lang');
    console.log(lang);
    console.groupEnd();
    translations['title'] = 'ABC';
    return translations;
  }
}

@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,
    TranslateModule.forChild({
      // loader: {
      //   provide: TranslateLoader,
      //   useFactory: HttpLoaderFactory,
      //   deps: [HttpClient]
      // },
      loader: {
        provide: TranslateLoader,
        useFactory: () => new CustomLoader(langPack)
      },
      // parser: { provide: TranslateParser, useClass: CustomParser },
      compiler: {
        provide: TranslateCompiler,
        useClass: CustomCompiler
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomHandler
      },
      useDefaultLang: false,
      isolate: true
    }),
    SharedModule
  ]
})
export class AboutModule {}

// loader: { provide: TranslateLoader, useClass: CustomLoader },
// compiler: { provide: TranslateCompiler, useClass: CustomCompiler },
// parser: { provide: TranslateParser, useClass: CustomParser },
// missingTranslationHandler: {
//   provide: MissingTranslationHandler,
//   useClass: CustomHandler
// },
