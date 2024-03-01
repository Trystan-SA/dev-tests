import { Component } from '@angular/core';
import { Routes, Route } from '@angular/router';


import {NotFound404Component} from './pages/404/404.component'

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/routes').then(mod => mod.PAGES_ROUTES) as Promise<Route[]> },

    // This way we can lazy load multiples routing modules for better organization (ex: /app, /admin, /user, etc.)
    //{ path: 'app', loadChildren: ()=> import('./app/routes').then(mod => mod.APP_ROUTES) as Promise<Route[]> },

    { path: '**', pathMatch: 'full', component: NotFound404Component}
];