import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { DashboardPage } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
