import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'waitlist'
    },
    {
        path: 'waitlist',
        loadComponent: ()=> import('./modules/waitlist/waitlist.component').then((c) => c.WaitlistComponent)
    },
    {
        path: '**',
        redirectTo: 'waitlist',
    },
];
