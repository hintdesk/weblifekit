import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { routing } from './app.routing';

import { ClipboardModule } from 'angular2-clipboard';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CustomFormsModule} from 'ng2-validation';

import { AppContext } from './infrastructure/app.context';

import { BindingPathRepository } from './infrastructure/dal/bindingPath.repository';
import { TariffRepository} from './infrastructure/dal/tariff.repository';
import { Repository} from './infrastructure/dal/repository';

import { CommandApi } from './infrastructure/api/command/command.api';
import { JsonService } from './infrastructure/json.service';
import { NamingProvider } from './infrastructure/naming.provider';



import { BaseCommandTemplate } from './infrastructure/api/command/commands/base.command.template';
import { CopyValueCommandTemplate } from './infrastructure/api/command/commands/copyValue.command.template';
import { ExecuteApplicationCommandTemplate } from './infrastructure/api/command/commands/executeApplication.command.template';
import { ActionCommandTemplate } from './infrastructure/api/command/commands/action.command.template';
import { SetErrorInErrorProviderCommandTemplate } from './infrastructure/api/command/commands/setErrorInErrorProvider.command.template';
import { ShowDetailsCommandTemplate } from './infrastructure/api/command/commands/showDetails.command.template';
import { SetTextForAutoCompleteCommandTemplate } from './infrastructure/api/command/commands/setTextForAutoComplete.command.template';
import { ShowNavigationElementCommandTemplate } from './infrastructure/api/command/commands/showNavigationElement.command.template';
import { ValidateCommandTemplate } from './infrastructure/api/command/commands/validate.command.template';
import { SetToDefaultCommandTemplate } from './infrastructure/api/command/commands/setToDefault.command.template';
import { DeleteArrayElementsCommandTemplate } from './infrastructure/api/command/commands/deleteArrayElements.command.template';
import { ShowGuiElementsCommandTemplate } from './infrastructure/api/command/commands/showGuiElements.command.template';
import { AddArrayElementCommandTemplate } from './infrastructure/api/command/commands/addArrayElement.command.template';
import { GoToPageCommandTemplate } from './infrastructure/api/command/commands/goToPage.command.template';
import { SetErrorInErrorProviderAndNotifyCommandTemplate } from './infrastructure/api/command/commands/setErrorInErrorProviderAndNotify.command.template';
import { CopyValueInCurrentItemCommandTemplate } from './infrastructure/api/command/commands/copyValueInCurrentItem.command.template';
import { HideDetailsCommandTemplate } from './infrastructure/api/command/commands/hideDetails.command.template';
import { RemoveAllArrayElementsCommandTemplate } from './infrastructure/api/command/commands/removeAllArrayElements.command.template';
import { FireEventCommandTemplate } from './infrastructure/api/command/commands/fireEvent.command.template';
import { EnableGuiElementsCommandTemplate } from './infrastructure/api/command/commands/enableGuiElements.command.template';
import { RenameNavigationElementCommandTemplate } from './infrastructure/api/command/commands/renameNavigationElement.command.template';
import { SetWarningInWarningProviderAndNotifyCommandTemplate } from './infrastructure/api/command/commands/setWarningInWarningProviderAndNotify.command.template';
import { AddItemAndShowGridDetailsCommandTemplate } from './infrastructure/api/command/commands/addItemAndShowGridDetails.command.template';
import { CopyObjectCommandTemplate} from './infrastructure/api/command/commands/copyObject.command.template';
import { ShowGridDetailsCommandTemplate } from './infrastructure/api/command/commands/showGridDetails.command.template';
import { ConfirmCommandAndChangeSwitchValueCommandTemplate} from './infrastructure/api/command/commands/confirmCommandAndChangeSwitchValue.command.template';
import { CalculateCommandTemplate } from './infrastructure/api/command/commands/calculate.command.template';
import { CustomCommandTemplate} from './infrastructure/api/command/commands/custom.command.template';
import { SetOfRulesCommandTemplate} from './infrastructure/api/command/commands/setOfRules.command.template';

import { AppComponent } from './app.component';
import { ConditionsComponent } from './components/condition/conditions.component';
import { EventComponent} from './components/event/event.component';
import { RuleComponent } from './components/rule/rule.component';
import { SnippetsComponent} from './components/snippets/snippets.component';

import { ConditionComponent} from './components/condition/condition.component';

import { ActionCommandComponent} from './components/commands/actionCommand.component';
import { CalculateComponent} from './components/commands/calculate.component';
import { CopyValueComponent} from './components/commands/copyValue.component';
import { ConfirmCommandAndChangeSwitchValueComponent} from './components/commands/confirmCommandAndChangeSwitchValue.component';
import { CustomCommandComponent} from './components/commands/custom.component';
import { ExecuteApplicationComponent} from './components/commands/executeApplication.component';
import { ShowDetailsComponent } from './components/commands/showDetails.component'
import { SetTextForAutoCompleteComponent } from './components/commands/setTextForAutoComplete.component';
import { SetErrorInErrorProviderComponent } from './components/commands/setErrorInErrorProvider.component';
import { ShowNavigationElementComponent } from './components/commands/showNavigationElement.component';
import { ValidateComponent } from './components/commands/validate.component';
import { SetToDefaultComponent } from './components/commands/setToDefault.component';
import { DeleteArrayElementsComponent } from './components/commands/deleteArrayElements.component';
import { ShowGuiElementsComponent } from './components/commands/showGuiElements.component';
import { AddArrayElementsComponent } from './components/commands/addArrayElement.component';
import { GoToPageComponent } from './components/commands/goToPage.component';
import { SetErrorInErrorProviderAndNotifyComponent } from './components/commands/setErrorInErrorProviderAndNotify.component';
import { CopyValueInCurrentItemComponent } from './components/commands/copyValueInCurrentItem.component';
import { HideDetailsComponent } from './components/commands/hideDetails.component';
import { RemoveAllArrayElementsComponent } from './components/commands/removeAllArrayElements.component';
import { FireEventComponent } from './components/commands/fireEvent.component';
import { EnableGuiElementsComponent } from './components/commands/enableGuiElements.component';
import { RenameNavigationElementComponent } from './components/commands/renameNavigationElement.component';
import { SetWarningInWarningProviderAndNotifyComponent } from './components/commands/setWarningInWarningProviderAndNotify.component';
import { AddItemAndShowGridDetailsComponent } from './components/commands/addItemAndShowGridDetails.component';
import { CopyObjectComponent} from './components/commands/copyObject.component';
import { ShowGridDetailsComponent} from './components/commands/showGridDetails.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    ClipboardModule,
    Ng2BootstrapModule,
    CustomFormsModule,
    routing
  ],

  declarations: [
    AppComponent,    
    ConditionsComponent,
    EventComponent,
    RuleComponent,
    SnippetsComponent,

    ConditionComponent,

    ActionCommandComponent,   
    CopyValueComponent,    
    ExecuteApplicationComponent,
    ShowDetailsComponent,
    SetTextForAutoCompleteComponent,
    SetErrorInErrorProviderComponent,
    ShowNavigationElementComponent,
    ValidateComponent,
    SetToDefaultComponent,
    DeleteArrayElementsComponent,
    ShowGuiElementsComponent,
    AddArrayElementsComponent,
    GoToPageComponent,
    SetErrorInErrorProviderAndNotifyComponent,
    CopyValueInCurrentItemComponent,
    HideDetailsComponent,
    RemoveAllArrayElementsComponent,
    FireEventComponent,
    EnableGuiElementsComponent,
    RenameNavigationElementComponent,
    SetWarningInWarningProviderAndNotifyComponent,
    AddItemAndShowGridDetailsComponent,
    CopyObjectComponent,
    ShowGridDetailsComponent,
    ConfirmCommandAndChangeSwitchValueComponent,
    CalculateComponent,
    CustomCommandComponent,
    
  ],

  providers: [
  
    NamingProvider,

    BindingPathRepository,
    TariffRepository,
    Repository,

    CommandApi,

    JsonService,
    AppContext,

    BaseCommandTemplate,
    CalculateCommandTemplate,
    ConfirmCommandAndChangeSwitchValueCommandTemplate,
    CopyValueCommandTemplate,
    ExecuteApplicationCommandTemplate,
    SetErrorInErrorProviderCommandTemplate,
    ActionCommandTemplate,
    ShowDetailsCommandTemplate,
    SetTextForAutoCompleteCommandTemplate,
    ShowNavigationElementCommandTemplate,
    ValidateCommandTemplate,
    SetToDefaultCommandTemplate,
    DeleteArrayElementsCommandTemplate,
    ShowGuiElementsCommandTemplate,
    AddArrayElementCommandTemplate,
    GoToPageCommandTemplate,
    SetErrorInErrorProviderAndNotifyCommandTemplate,
    CopyValueInCurrentItemCommandTemplate,
    HideDetailsCommandTemplate,
    RemoveAllArrayElementsCommandTemplate,
    FireEventCommandTemplate,
    EnableGuiElementsCommandTemplate,
    RenameNavigationElementCommandTemplate,
    SetWarningInWarningProviderAndNotifyCommandTemplate,
    AddItemAndShowGridDetailsCommandTemplate,
    CopyObjectCommandTemplate,
    ShowGridDetailsCommandTemplate,
    CustomCommandTemplate,
    SetOfRulesCommandTemplate
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }