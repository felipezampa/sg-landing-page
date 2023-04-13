import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent, TemplateLPageComponent, TemplateThanksComponent } from './template';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'template', pathMatch: 'full'
  // },
  // {
  //   path: '**', redirectTo: 'template'
  // },
  {
    path: 'template',
    component: TemplateComponent, children: [
      // { path: '', redirectTo: 'template/ebook'},
      { path: 'ebook', component: TemplateLPageComponent },
      { path: 'obrigado', component: TemplateThanksComponent }
    ],
  },
  // {
  //   path: 'agro',
  //   component: TemplateComponent, children: [
  //     // { path: '', redirectTo: 'template/ebook'},
  //     { path: 'ebook', component: TemplateLPageComponent },
  //     { path: 'obrigado', component: TemplateThanksComponent }
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
