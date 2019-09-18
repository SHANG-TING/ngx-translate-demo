import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { LandscapeDetailsComponent } from './page/landscape-details/landscape-details.component';
import { LandscapeItemComponent } from './page/landscape-item/landscape-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    LandscapeItemComponent,
    LandscapeDetailsComponent
  ],
  imports: [TranslateModule.forChild(), SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
