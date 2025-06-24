import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: ()=> import('./pages/about-page/about-page.component')
  },
  {
    path: 'contact',
    loadComponent: ()=> import('./pages/contact-page copy/contact-page.component')
  },
  {
    path: 'pricing',
    loadComponent: ()=> import('./pages/pricing-page copy/pricing-page.component')
  },
  {
    path: '**',
    redirectTo: ()=> {
      return 'about'
    }
  }
];
