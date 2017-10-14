import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';
import { NewIncidentComponent } from './component/new-incident.component';
import { LoginComponent } from './component/login.component';
import { DynamicFormComponent } from './component/dynamicForm.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new-incident', component: NewIncidentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'form', component: DynamicFormComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
