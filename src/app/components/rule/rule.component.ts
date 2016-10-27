import { Component, OnInit } from '@angular/core';

import { CommandService } from '../../services/command.service';

import { Rule, RuleCategoryArt } from '../../models/rule';
import { Command, CommandType, ElementType, EventType, PlainTextType } from '../../models/command';
import { CommandInitializeParameter, CommandInitializeParameterName } from '../../models/commandInitializeParameter';
import { RuleModel } from '../../models/rule.model';


@Component({
    selector: 'rule',
    templateUrl: 'rule.component.html'
})

export class RuleComponent implements OnInit{
    bindingPaths: string[] = [];
    result: string = "";  
    commandTypes: CommandType[] = [];    
    destinationElementTypes: ElementType[] = [];
    displayNameTypes: ElementType[]=[];
    ruleModel: RuleModel = new RuleModel();
    errorTextTypes : ElementType[] = [];
    eventTypes: EventType[]=[];
    sourceElementTypes: ElementType[] = [];
    sourcePropertyTypes: ElementType[]=[];
    targetPropertyTypes: ElementType[]=[];
    
    constructor(
        private commandService: CommandService, ) {

    }

    copyToClipboard(): void {

    }

    generate(): void {
        var rule: Rule;
        var commandTemplates = this.commandService.getCommandTemplates();
        for (let commandTemplate of commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {              
                rule = commandTemplate.execute(this.ruleModel);
                break;
            }
        }

        this.result = JSON.stringify(rule, undefined, 4);

    }

    ngOnInit(): void {
        this.commandTypes = this.commandService.getCommandTypes();
        if (this.commandTypes.length > 0) {
            this.ruleModel.CommandType = this.commandTypes[0];
            this.onCommandTypeChanged(undefined);
        }
        this.bindingPaths.push("BerechnungsEingaben.VersicherungsNehmer.GeschlechtArt");
        this.bindingPaths.push("BerechnungsEingaben.VersicherungsNehmer.AnredeArt");
    }

  

    onCommandTypeChanged($event): void {
        var commandTemplates = this.commandService.getCommandTemplates();
        for (let commandTemplate of commandTemplates) {
            if (commandTemplate.canHandle(this.ruleModel)) {                
                this.destinationElementTypes = commandTemplate.getDestinationElementTypes();
                this.displayNameTypes = commandTemplate.getDisplayNameTypes();
                this.errorTextTypes = commandTemplate.getErrorTextTypes();           
                this.eventTypes = commandTemplate.getEventTypes();         
                this.sourceElementTypes = commandTemplate.getSourceElementTypes();
                this.sourcePropertyTypes = commandTemplate.getSourcePropertyTypes();                
                this.targetPropertyTypes = commandTemplate.getTargetPropertyTypes();            
            }
        }        

        if (this.destinationElementTypes.length > 0)
            this.ruleModel.DestinationElementType = this.destinationElementTypes[0];
        
        if (this.displayNameTypes.length>0)
            this.ruleModel.DisplayNameType = this.displayNameTypes[0];

        if (this.errorTextTypes.length>0)
            this.ruleModel.ErrorTextType = this.errorTextTypes[0];

        if (this.eventTypes.length>0)
            this.ruleModel.EventType = this.eventTypes[0];

        if (this.sourceElementTypes.length > 0) {
            this.ruleModel.SourceElementType = this.sourceElementTypes[0];
        }

        this.generate();
    }

    onDataChanged($event):void {        
        this.generate();
    }

    // onModelDataChanged($event):void {
    //     // this.ruleModel =$event;
    //     this.generate();
    // }

    
}