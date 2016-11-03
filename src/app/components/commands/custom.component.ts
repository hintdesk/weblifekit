import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { CommandService } from '../../services/command.service';
import { NamingService } from '../../services/naming.service';
import { RuleModel } from '../../models/rule';

@Component({
    selector: 'custom',
    templateUrl: 'custom.component.html'
})

export class CustomCommandComponent extends BaseCommandComponent {
    @Input()
    ruleModel: RuleModel;

    @Output()
    onDataChanged = new EventEmitter();

    javascriptCode: string;

    constructor(commandService: CommandService,
        private namingService: NamingService) {
        super(commandService);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.ruleModel.Name = "";
    }

    onNameChanged($event): void {
        var name = this.namingService.removeUnderscore(this.ruleModel.Name);
        var nameOfFunction = this.namingService.lowerCaseFirstLetter(name);
        var nameOfClass = this.namingService.upperCaseFirstLetter(name);

        this.javascriptCode = "self." + nameOfFunction + " = function (viewModel, configData, application) { return new " + nameOfClass + "(configData, application); };\n\n";
        this.javascriptCode +=
            "function " + nameOfClass + "(configData, application) {\n" +
            "    function inner" + nameOfClass + "() {\n" +
            "        var self = this;\n";
        if (this.ruleModel.Parameter)
            this.javascriptCode += "        self.execute = function (viewModel, parameter) {\n";            
        else
            this.javascriptCode += "        self.execute = function (viewModel) {\n";
        this.javascriptCode += "    }\n" +
            "};\n\n" +

            "   inner" + nameOfClass + ".prototype = new Command(null, configData, application);\n" +
            "   return new inner" + nameOfClass + "();\n" +
            "}";
        this.onModelDataChanged($event);
    }
}