import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule.model';
import { ResourceTextComponent } from '../resourceText.component';
import { CommandService } from '../../services/command.service';

import { EventType, ElementType } from '../../models/command';


export class BaseCommandComponent extends ResourceTextComponent implements OnInit {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    destinationElementTypes: ElementType[] = [];
    displayNameTypes: ElementType[] = [];
    errorTextTypes: ElementType[] = [];
    errorTextValuePlaceholder: string;
    eventTypes: EventType[] = [];
    sourceElementTypes: ElementType[] = [];

    constructor(
        private commandService: CommandService) {
        super();
    }

    ngOnInit(): void {
        var commandTemplates = this.commandService.getCommandTemplates();
        for (let commandTemplate of commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {
                this.destinationElementTypes = commandTemplate.getDestinationElementTypes();
                this.displayNameTypes = commandTemplate.getDisplayNameTypes();
                this.errorTextTypes = commandTemplate.getErrorTextTypes();
                this.eventTypes = commandTemplate.getEventTypes();
                this.sourceElementTypes = commandTemplate.getSourceElementTypes();
            }
        }

        this.errorTextValuePlaceholder = this.TextPlaceholderErrorTextPlainText;
    }

    onErrorTextTypeChanged($event) {        
        switch (this.ruleModel.ErrorTextType) {
            case ElementType.PlainText:
                this.errorTextValuePlaceholder = this.TextPlaceholderErrorTextPlainText;
                break;
            case ElementType.Resource:
                this.errorTextValuePlaceholder = this.TextPlaceholderErrorTextResource;
                break;
            default:
                this.errorTextValuePlaceholder = "";
                break;
        }

        this.onModelDataChanged($event);
    }


    onModelDataChanged($event): void {
        this.onDataChanged.emit($event);
    }
}