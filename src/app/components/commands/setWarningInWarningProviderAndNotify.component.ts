import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'setWarningInWarningProviderAndNotify',
    templateUrl:'setWarningInWarningProviderAndNotify.component.html'
})

export class SetWarningInWarningProviderAndNotifyComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    constructor(commandService: CommandService) {
        super(commandService);
    }
}