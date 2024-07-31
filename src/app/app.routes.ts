import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'landing',
        loadComponent: () => import('./modules/landing/pages/main/main.component').then(m =>  m.MainComponent )
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
];
