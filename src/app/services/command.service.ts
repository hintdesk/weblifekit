import { Injectable } from '@angular/core';

import { CommandType } from '../models/command';

import { ActionCommandTemplate } from '../commands/action.command.template';
import { CommandTemplate } from '../commands/command.template';
import { CopyValueCommandTemplate } from '../commands/copyValue.command.template';
import { ExecuteApplicationCommandTemplate } from '../commands/executeApplication.command.template';
import { SetErrorInErrorProviderCommandTemplate } from '../commands/setErrorInErrorProvider.command.template';
import { ShowDetailsCommandTemplate } from '../commands/showDetails.command.template';
import { SetTextForAutoCompleteCommandTemplate } from '../commands/setTextForAutoComplete.command.template';
import { ShowNavigationElementCommandTemplate } from '../commands/showNavigationElement.command.template';
import { ValidateCommandTemplate } from '../commands/validate.command.template';
import { SetToDefaultCommandTemplate } from '../commands/setToDefault.command.template';
import { DeleteArrayElementsCommandTemplate } from '../commands/deleteArrayElements.command.template';
import { ShowGuiElementsCommandTemplate } from '../commands/showGuiElements.command.template';
import { AddArrayElementCommandTemplate } from '../commands/addArrayElement.command.template';
import { GoToPageCommandTemplate } from '../commands/goToPage.command.template';
import { SetErrorInErrorProviderAndNotifyCommandTemplate } from '../commands/setErrorInErrorProviderAndNotify.command.template';
import { CopyValueInCurrentItemCommandTemplate } from '../commands/copyValueInCurrentItem.command.template';
import {HideDetailsCommandTemplate} from '../commands/hideDetails.command.template';
import { RemoveAllArrayElementsCommandTemplate } from '../commands/removeAllArrayElements.command.template';
import { FireEventCommandTemplate} from '../commands/fireEvent.command.template';
import { EnableGuiElementsCommandTemplate} from '../commands/enableGuiElements.command.template';
import { RenameNavigationElementCommandTemplate} from '../commands/renameNavigationElement.command.template';
import { SetWarningInWarningProviderAndNotifyCommandTemplate} from '../commands/setWarningInWarningProviderAndNotify.command.template';
import { AddItemAndShowGridDetailsCommandTemplate} from '../commands/addItemAndShowGridDetails.command.template';
import { CopyObjectCommandTemplate} from '../commands/copyObject.command.template';
import { ShowGridDetailsCommandTemplate } from '../commands/showGridDetails.command.template';
import { ConfirmCommandAndChangeSwitchValueCommandTemplate} from '../commands/confirmCommandAndChangeSwitchValue.command.template';
import { CalculateCommandTemplate} from '../commands/calculate.command.template';
import { CustomCommandTemplate} from '../commands/custom.command.template';


@Injectable()
export class CommandService {

    constructor(
        private actionCommand: ActionCommandTemplate,
        private copyValueCommandTemplate: CopyValueCommandTemplate,
        private executeApplicationCommandTemplate: ExecuteApplicationCommandTemplate,
        private setErrorInErrorProviderCommandTemplate: SetErrorInErrorProviderCommandTemplate,
        private showDetailsCommandTemplate: ShowDetailsCommandTemplate,
        private setTextForAutoCompleteCommandTemplate: SetTextForAutoCompleteCommandTemplate,
        private showNavigationElementCommandTemplate: ShowNavigationElementCommandTemplate,
        private validateCommandTemplate: ValidateCommandTemplate,
        private setToDefaultCommandTemplate: SetToDefaultCommandTemplate,
        private deleteArrayElementsCommandTemplate: DeleteArrayElementsCommandTemplate,
        private showGuiElementsCommandTemplate: ShowGuiElementsCommandTemplate,
        private addArrayElementCommandTemplate: AddArrayElementCommandTemplate,
        private goToPageCommandTemplate: GoToPageCommandTemplate,
        private setErrorInErrorProviderAndNotifyCommandTemplate: SetErrorInErrorProviderAndNotifyCommandTemplate,
        private copyValueInCurrentItemCommandTemplate: CopyValueInCurrentItemCommandTemplate,
        private hideDetailsCommandTemplate: HideDetailsCommandTemplate,
        private removeAllArrayElementsCommandTemplate: RemoveAllArrayElementsCommandTemplate,
        private fireEventCommandTemplate:FireEventCommandTemplate,
        private enableGuiElementsCommandTemplate:EnableGuiElementsCommandTemplate,
        private renameNavigationElementCommandTemplate:RenameNavigationElementCommandTemplate,
        private setWarningInWarningProviderAndNotifyCommandTemplate: SetWarningInWarningProviderAndNotifyCommandTemplate,
        private addItemAndShowGridDetailsCommandTemplate:AddItemAndShowGridDetailsCommandTemplate,
        private copyObjectCommandTemplate:CopyObjectCommandTemplate,
        private showGridDetailsCommandTemplate:ShowGridDetailsCommandTemplate,
        private confirmCommandAndChangeSwitchValueCommandTemplate: ConfirmCommandAndChangeSwitchValueCommandTemplate,
        private calculateCommandTemplate:CalculateCommandTemplate,
        private customCommandTemplate: CustomCommandTemplate) {

    }

    getCommandTypes(): CommandType[] {
        const ruleCommands: CommandType[] = [
            CommandType.CopyValueCommand,
            CommandType.SetErrorInErrorProviderCommand,
            CommandType.ActionCommand,
            CommandType.ExecuteApplicationCommand,
            CommandType.ShowDetailsCommand,
            CommandType.SetTextForAutoCompleteCommand,
            CommandType.ShowNavigationElementCommand,
            CommandType.ValidateCommand,
            CommandType.SetToDefaultCommand,
            CommandType.DeleteArrayElementsCommand,
            CommandType.ShowGuiElementsCommand,
            CommandType.AddArrayElementCommand,
            CommandType.GoToPageCommand,
            CommandType.SetErrorInErrorProviderAndNotifyCommand,
            CommandType.CopyValueInCurrentItemCommand,
            CommandType.HideDetailsCommand,
            CommandType.RemoveAllArrayElementsCommand,
            CommandType.FireEventCommand,
            CommandType.EnableGuiElementsCommand,
            CommandType.RenameNavigationElementCommand,
            CommandType.SetWarningInWarningProviderAndNotifyCommand,
            CommandType.AddItemAndShowGridDetailsCommand,
            CommandType.CopyObjectCommand,
            CommandType.ShowGridDetailsCommand,
            CommandType.ConfirmCommandAndChangeSwitchValueCommand,
            CommandType.CalculateCommand,
            CommandType.CustomCommand,
        ];
        return ruleCommands.sort();

    }

    getCommandTemplates(): CommandTemplate[] {
        const commandTemplates: CommandTemplate[] =
            [
                this.actionCommand,
                this.copyValueCommandTemplate,
                this.executeApplicationCommandTemplate,
                this.setErrorInErrorProviderCommandTemplate,
                this.showDetailsCommandTemplate,
                this.setTextForAutoCompleteCommandTemplate,
                this.showNavigationElementCommandTemplate,
                this.validateCommandTemplate,
                this.setToDefaultCommandTemplate,
                this.deleteArrayElementsCommandTemplate,
                this.showGuiElementsCommandTemplate,
                this.addArrayElementCommandTemplate,
                this.goToPageCommandTemplate,
                this.setErrorInErrorProviderAndNotifyCommandTemplate,
                this.copyValueInCurrentItemCommandTemplate,
                this.hideDetailsCommandTemplate,
                this.removeAllArrayElementsCommandTemplate,
                this.fireEventCommandTemplate,
                this.enableGuiElementsCommandTemplate,
                this.renameNavigationElementCommandTemplate,
                this.setWarningInWarningProviderAndNotifyCommandTemplate,
                this.addItemAndShowGridDetailsCommandTemplate,
                this.copyObjectCommandTemplate,
                this.showGridDetailsCommandTemplate,
                this.confirmCommandAndChangeSwitchValueCommandTemplate,
                this.calculateCommandTemplate,
                this.customCommandTemplate
            ];
        return commandTemplates;
    }
}