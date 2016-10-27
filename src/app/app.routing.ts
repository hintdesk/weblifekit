import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent} from './components/rule/rule.component';
import { ConditionComponent} from './components/condition/condition.component';

const appRoutes: Routes = [
    { path: 'rule', component: RuleComponent },  
    { path: 'condition', component: ConditionComponent }, 
    { path: '', redirectTo: '/rule', pathMatch: 'full' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);