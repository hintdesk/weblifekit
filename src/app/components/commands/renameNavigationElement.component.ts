import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { ElementType} from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule.model';

@Component({
    selector: 'renameNavigationElement',
    templateUrl: 'renameNavigationElement.component.html'
})

export class RenameNavigationElementComponent extends BaseCommandComponent {
        @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();
    
    displayNameValuePlaceholder:string;

    constructor(commandService: CommandService) {
        super(commandService);
    }

    ngOnInit():void 
    {
        this.displayNameValuePlaceholder = this.TextPlaceholderDisplayNameValuePlainText;
        super.ngOnInit();
    }
    
    onDisplayNameTypeChanged($event):void{
        switch(this.ruleModel.DisplayNameType)
        {
            case ElementType.PlainText:
            this.displayNameValuePlaceholder = this.TextPlaceholderDisplayNameValuePlainText;
            break;
            case ElementType.Calculator:
            this.displayNameValuePlaceholder = this.TextPlaceholderDisplayNameValueCalculator;
            break;
            default:
            this.displayNameValuePlaceholder = "";
            break;
        }
        this.onModelDataChanged($event);
    }
}