import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';
import { LoginComponent } from './component/login.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'login', component: LoginComponent }, 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);