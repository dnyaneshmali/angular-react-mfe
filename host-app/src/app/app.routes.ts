import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ReactWrapperComponent } from './react-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => 
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component'
      }).then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    component: ReactWrapperComponent,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: './Dashboard'
    }
  }
];
