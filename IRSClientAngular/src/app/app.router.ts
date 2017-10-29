import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardDashboardComponent } from "./component/guard-app/guard-dashboard.component";
import { GuardIncidentComponent } from "./component/guard-app/guard-incident.component";
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NewReportComponent } from './component/report/new-report.component';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';

export const router: Routes = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // /<path>
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'reporting', component: GuardDashboardComponent },
    { path: 'search', component: SearchComponent },
    { path: 'guard', component: GuardDashboardComponent},
    { path: 'new-report', component: NewReportComponent },
    { path: 'report/:id', component: GuardIncidentComponent},

    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
