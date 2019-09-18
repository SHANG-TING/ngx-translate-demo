import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapeResolver } from './landscape.resolver';
import { HomeComponent } from './page/home.component';
import { LandscapeDetailsComponent } from './page/landscape-details/landscape-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'landscapes/:id',
    component: LandscapeDetailsComponent,
    resolve: {
      landscape: LandscapeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
