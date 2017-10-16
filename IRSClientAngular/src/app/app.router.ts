import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard.component';
import { NewIncidentComponent } from './component/new-incident.component';
import { LoginComponent } from './component/login.component';
<<<<<<< HEAD
import { GuardDashboard } from './component/guard-app/guard-dashboard.component';

=======
import { DynamicFormComponent } from './component/dynamic-form.component';
>>>>>>> 85750a33ddb7abcb03a943373a1ced3c82f6d86f

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
<<<<<<< HEAD
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'reporting', component: GuardDashboard },
=======
    { path: 'form', component: DynamicFormComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
>>>>>>> 85750a33ddb7abcb03a943373a1ced3c82f6d86f
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
