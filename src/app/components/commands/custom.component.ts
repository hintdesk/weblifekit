import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseCommandComponent } from './baseCommand.component';
import { AppContext } from '../../services/app.context';
import { NamingProvider } from '../../services/naming.provider';
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

     constructor(appContext: AppContext) {
        super(appContext);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.ruleModel.Name = "";
    }

    onNameChanged($event): void {
        var name = this.appContext.Naming.removeUnderscore(this.ruleModel.Name);
        var nameOfFunction = this.appContext.Naming.lowerCaseFirstLetter(name) + "Command";
        var nameOfClass = this.appContext.Naming.upperCaseFirstLetter(name)+ "Command";

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