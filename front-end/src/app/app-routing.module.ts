import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent, ThankYouComponent } from './index';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'obrigado', component: ThankYouComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
