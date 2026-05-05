import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { List } from './list/list';
import { ApiFetch } from './api-fetch/api-fetch';
import { Search } from './search/search';
import { Login } from './login/login';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'gallery', component: Gallery },
  { path: 'list', component: List },
  { path: 'service', component: ApiFetch,canActivate: [authGuard] },
  { path: "search", component: Search },
  { path: "login", component: Login },
  {path:'googlesearch', loadComponent: () => import('./googlesearch/googlesearch').then(m => m.Googlesearch)},
];
