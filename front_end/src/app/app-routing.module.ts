import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'ebook', pathMatch: 'full'
  },
  {
    path: 'ebook', component: LandingPageComponent
  },
  {
    path: 'obrigado', component: ThankYouComponent
  },
  {
    path: '**', redirectTo: 'ebook'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
