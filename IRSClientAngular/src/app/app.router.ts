import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuardDashboardComponent} from "./component/guard/guard-dashboard.component";
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NewReportComponent } from './component/report/new-report.component';
import { LoginComponent } from './component/login/login.component';
import {GuardTestViewReportComponent} from "./component/guard/guard-test-view-report.component";

export const router: Routes = [
    // Default
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    // /<path>
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'guard', component: GuardDashboardComponent},
    { path: 'new-report', component: NewReportComponent },
    { path: 'report/:id', component: GuardTestViewReportComponent},

    // 404
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot( router );
