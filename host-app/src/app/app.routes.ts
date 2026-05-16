import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
