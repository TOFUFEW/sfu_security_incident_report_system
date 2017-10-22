import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';
import { NewReportComponent } from './component/new-report.component';
import { LoginComponent } from './component/login.component';
import { GuardDashboardComponent } from './component/guard-app/guard-dashboard.component';
import { DynamicFormComponent } from './component/dynamic-form.component';

export const router: Routes = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // /<path>
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'reporting', component: GuardDashboardComponent },
    { path: 'form', component: DynamicFormComponent },
    { path: 'new-report', component: NewReportComponent },

    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
