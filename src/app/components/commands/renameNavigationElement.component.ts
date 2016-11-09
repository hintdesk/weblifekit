import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../infrastructure/app.context';
import { ElementType} from '../../models/command';
import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';

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

     constructor(appContext: AppContext) {
        super(appContext);
    }

    ngOnInit():void 
    {        
        super.ngOnInit();
        this.displayNameValuePlaceholder = this.TextPlaceholderDisplayNameValuePlainText;
        
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