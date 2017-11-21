import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NewReportComponent } from './component/report/new-report.component';
import { SearchComponent } from './component/search/search.component';
import { LoginComponent } from './component/login/login.component';
import { GuardDashboardComponent } from "./component/guard-app/guard-dashboard";
import { GuardIncidentComponent } from "./component/guard-app/guard-incident.component";
import { NewAccountComponent } from './component/login/new-account-component';

export const router: Routes = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // /<path>
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'guard-app/dashboard', component: GuardDashboardComponent },
    { path: 'search', component: SearchComponent },
    { path: 'new-report', component: NewReportComponent },
    { path: 'guard-app/report/:id', component: GuardIncidentComponent},
    { path: 'new-account', component: NewAccountComponent},    

    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
