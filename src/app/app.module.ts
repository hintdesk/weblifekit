import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { ClipboardModule } from 'angular2-clipboard';
//import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';


import { CommandService } from './services/command.service';
import { JsonService } from './services/json.service';
import { NamingService } from './services/naming.service';

import { BaseCommandTemplate } from './commands/base.command.template';
import { CopyValueCommandTemplate } from './commands/copyValue.command.template';
import { ExecuteApplicationCommandTemplate } from './commands/executeApplication.command.template';
import { ActionCommandTemplate } from './commands/action.command.template';
import { SetErrorInErrorProviderCommandTemplate } from './commands/setErrorInErrorProvider.command.template';
import { ShowDetailsCommandTemplate } from './commands/showDetails.command.template';
import { SetTextForAutoCompleteCommandTemplate } from './commands/setTextForAutoComplete.command.template';
import { ShowNavigationElementCommandTemplate } from './commands/showNavigationElement.command.template';
import { ValidateCommandTemplate } from './commands/validate.command.template';
import { SetToDefaultCommandTemplate } from './commands/setToDefault.command.template';
import { DeleteArrayElementsCommandTemplate } from './commands/deleteArrayElements.command.template';
import { ShowGuiElementsCommandTemplate } from './commands/showGuiElements.command.template';
import { AddArrayElementCommandTemplate } from './commands/addArrayElement.command.template';
import { GoToPageCommandTemplate } from './commands/goToPage.command.template';
import { SetErrorInErrorProviderAndNotifyCommandTemplate } from './commands/setErrorInErrorProviderAndNotify.command.template';
import { CopyValueInCurrentItemCommandTemplate } from './commands/copyValueInCurrentItem.command.template';
import { HideDetailsCommandTemplate } from './commands/hideDetails.command.template';
import { RemoveAllArrayElementsCommandTemplate } from './commands/removeAllArrayElements.command.template';
import { FireEventCommandTemplate } from './commands/fireEvent.command.template';
import { EnableGuiElementsCommandTemplate } from './commands/enableGuiElements.command.template';
import { RenameNavigationElementCommandTemplate } from './commands/renameNavigationElement.command.template';
import { SetWarningInWarningProviderAndNotifyCommandTemplate } from './commands/setWarningInWarningProviderAndNotify.command.template';
import { AddItemAndShowGridDetailsCommandTemplate } from './commands/addItemAndShowGridDetails.command.template';
import { CopyObjectCommandTemplate} from './commands/copyObject.command.template';
import { ShowGridDetailsCommandTemplate } from './commands/showGridDetails.command.template';
import { ConfirmCommandAndChangeSwitchValueCommandTemplate} from './commands/confirmCommandAndChangeSwitchValue.command.template';
import { CalculateCommandTemplate } from './commands/calculate.command.template';

import { AppComponent } from './app.component';
import { RuleComponent } from './components/rule/rule.component';

import { ActionCommandComponent} from './components/commands/actionCommand.component';
import { CalculateComponent} from './components/commands/calculate.component';
import { CopyValueComponent} from './components/commands/copyValue.component';
import { ConfirmCommandAndChangeSwitchValueComponent} from './components/commands/confirmCommandAndChangeSwitchValue.component';
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
    // ClipboardModule,
    // Ng2BootstrapModule
  ],

  declarations: [
    AppComponent,    
    RuleComponent,

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
    CalculateComponent
  ],

  providers: [
    CommandService,
    JsonService,
    NamingService,

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
  
 
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }