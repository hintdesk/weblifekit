import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent} from './components/rule/rule.component';
import { ConditionsComponent} from './components/condition/conditions.component';
import { EventComponent} from './components/event/event.component';

const appRoutes: Routes = [
    { path: 'condition', component: ConditionsComponent },
    { path: 'event', component: EventComponent },
    { path: 'rule', component: RuleComponent },
    { path: '', redirectTo: '/rule', pathMatch: 'full' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);