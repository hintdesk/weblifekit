import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { ElementType } from '../../models/command';
import { RuleModel } from '../../models/rule.model';

@Component({
    selector: 'copyValue',
    templateUrl: 'copyValue.component.html'
})

export class CopyValueComponent extends BaseCommandComponent {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    sourceElementValuePlaceholder: string;

    constructor(commandService: CommandService) {
        super(commandService);
    }

    ngOnInit(): void {
        super.ngOnInit();       

        this.sourceElementValuePlaceholder = this.TextPlaceholderSourceElementValuePlainText;
    }

    onSourceElementTypeChanged($event) {
        switch (this.ruleModel.SourceElementType) {
            case ElementType.PlainText:
                this.sourceElementValuePlaceholder = this.TextPlaceholderSourceElementValuePlainText;
                break;
            case ElementType.Calculator:
                this.sourceElementValuePlaceholder = this.TextPlaceholderStateTable;
                break;
            case ElementType.SpringObjectName:
                this.sourceElementValuePlaceholder = this.TextPlaceholderSpringObjectName;
                break;
            case ElementType.Json:
                this.sourceElementValuePlaceholder = this.TextPlaceholderJsonTypeName;
                break;
            default:
                this.sourceElementValuePlaceholder = "";
                break;
        }

        this.onModelDataChanged($event);

    }
}