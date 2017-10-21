import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';
import { NewIncidentComponent } from './component/new-incident.component';
import { LoginComponent } from './component/login.component';
import { GuardDashboardComponent } from './component/guard-app/guard-dashboard.component';
import { DynamicFormComponent } from './component/dynamic-form.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'mobile', component: GuardDashboardComponent },
    { path: 'form', component: DynamicFormComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
