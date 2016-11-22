import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RuleModel } from '../../models/rule';
import { ResourceTextService } from '../../infrastructure/resourceText.service';
import { AppContext } from '../../infrastructure/app.context';

import { CommandCopyMode, CommandEventType, ElementType } from '../../models/command';


export class BaseCommandComponent extends ResourceTextService implements OnInit {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    bindingPaths: string[] = [];
    destinationElementTypes: ElementType[] = [];
    displayNameTypes: ElementType[] = [];
    errorTextTypes: ElementType[] = [];
    errorTextValuePlaceholder: string;
    eventTypes: CommandEventType[] = [];
    sourceElementTypes: ElementType[] = [];
    copyModes : CommandCopyMode[] =[];

    constructor(
        protected appContext : AppContext
      ) {
        super();
                this.bindingPaths = appContext.Repository.BindingPath.getAll();
    }

    ngOnInit(): void {
        var commandTemplates = this.appContext.Command.getCommandTemplates();
        for (let commandTemplate of commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {
                this.copyModes = commandTemplate.getCopyModes();
                this.destinationElementTypes = commandTemplate.getDestinationElementTypes();
                this.displayNameTypes = commandTemplate.getDisplayNameTypes();
                this.errorTextTypes = commandTemplate.getErrorTextTypes();
                this.eventTypes = commandTemplate.getEventTypes();
                this.sourceElementTypes = commandTemplate.getSourceElementTypes();
                
            }
        }

        this.errorTextValuePlaceholder = this.TextPlaceholderErrorTextPlainText;

        if (this.destinationElementTypes.length > 0)
            this.ruleModel.DestinationElementType = this.destinationElementTypes[0];

        if (this.displayNameTypes.length > 0)
            this.ruleModel.DisplayNameType = this.displayNameTypes[0];

        if (this.errorTextTypes.length > 0)
            this.ruleModel.ErrorTextType = this.errorTextTypes[0];

        if (this.eventTypes.length > 0)
            this.ruleModel.CommandEventType = this.eventTypes[0];

        if (this.sourceElementTypes.length > 0)
            this.ruleModel.SourceElementType = this.sourceElementTypes[0];



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