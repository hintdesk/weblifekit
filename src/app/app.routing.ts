import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent} from './components/rule/rule.component';
import { ConditionsComponent} from './components/condition/conditions.component';

const appRoutes: Routes = [
    { path: 'rule', component: RuleComponent },  
    { path: 'condition', component: ConditionsComponent }, 
    { path: '', redirectTo: '/rule', pathMatch: 'full' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);