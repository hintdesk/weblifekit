import { Component, OnInit } from '@angular/core';
import { CalculatorType, Condition, ConditionModel, ConditionType } from '../../models/condition';
import { NamingProvider } from '../../infrastructure/naming.provider';

@Component({
    selector: 'conditions',
    templateUrl: 'conditions.component.html'
})

export class ConditionsComponent {
    conditionModel: ConditionModel = new ConditionModel();
    result: string;

    constructor(private namingProvider: NamingProvider) {
    }

    generate() {
        var condition = new Condition();
        condition.Name = "";


        //Name
        switch (this.conditionModel.LeftConditionType) {
            case ConditionType.LeftCalculator:
                condition.Name = this.getNameIfLeftCalculator();
                break;
            case ConditionType.LeftCondition:
                condition.Name = this.getNameIfLeftCondition();
                break;
            case ConditionType.LeftPath:
                condition.Name = this.getNameIfLeftPath();
                break;
            case ConditionType.LeftValue:
                condition.Name = this.getNameIfLeftValue();
                break;
        }

        //Left
        switch (this.conditionModel.LeftConditionType) {
            case ConditionType.LeftCalculator:
                condition.LeftCalculator = CalculatorType.StateTable;
                condition.LeftCalculatorParam = this.conditionModel.LeftParameter;
                break;
            case ConditionType.LeftCondition:
                condition.LeftCondition = this.conditionModel.LeftParameter;
                break;
            case ConditionType.LeftPath:
                if (this.conditionModel.LeftParameter)                
                    condition.LeftPath = this.conditionModel.LeftParameter.replace(new RegExp("\\\"", "g"), "'");
                break;
            case ConditionType.LeftValue:
                condition.LeftValue = this.conditionModel.LeftParameter;
                break;
        }

        condition.Operator = String(this.conditionModel.OperatorType);

        //Right
        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightCalculator:
                condition.RightCalculator = CalculatorType.StateTable;
                condition.RightCalculatorParam = this.conditionModel.RightParameter;
                break;
            case ConditionType.RightCondition:
                condition.RightCondition = this.conditionModel.RightParameter;
                break;
            case ConditionType.RightPath:
                condition.RightPath = this.conditionModel.RightParameter;
                break;
            case ConditionType.RightRegExp:
                condition.RightRegExp = this.conditionModel.RightParameter;
                break;
            case ConditionType.RightValue:
                condition.RightValue = this.conditionModel.RightParameter;
                break;

        }


        this.result = JSON.stringify(condition, undefined, 4);
    }

    getNameIfLeftCalculator(): string {
        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightValue:
                return "Is_" + this.namingProvider.removeUnderscore(this.conditionModel.LeftParameter) + "_" + this.namingProvider.getOperatorName(this.conditionModel.OperatorType) + "_" + this.namingProvider.renameIfBlank(this.conditionModel.RightParameter);
            default:
                return "";
        }
    }

    getNameIfLeftCondition(): string {
        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightCondition:
                return "Is_" + this.namingProvider.removeUnderscore(this.conditionModel.LeftParameter.replace("Is_", "")) + "_" + this.namingProvider.getOperatorName(this.conditionModel.OperatorType) + "_" + this.namingProvider.removeUnderscore(this.conditionModel.RightParameter.replace("Is_", ""));
            default:
                return "";
        }
    }

    getNameIfLeftPath(): string {
        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightValue:
                var left = this.namingProvider.getLastElement(this.conditionModel.LeftParameter);
                if (left)
                    left = left.replace(new RegExp("\\\"|\\\[|\\\]", "g"), "");
                return "Is_" + left + "_" + this.namingProvider.getOperatorName(this.conditionModel.OperatorType) + "_" + this.namingProvider.renameIfBlank(this.conditionModel.RightParameter);
            case ConditionType.RightRegExp:
                return "Is_" + this.namingProvider.getLastElement(this.conditionModel.LeftParameter) + "_Matches_RegEx";
            default:
                return "";
        }
    }

    getNameIfLeftValue(): string {
        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightCalculator:
                return "Is_" + this.namingProvider.removeUnderscore(this.conditionModel.RightParameter) + "_" + this.namingProvider.getOperatorName(this.conditionModel.OperatorType) + "_" + this.namingProvider.renameIfBlank(this.conditionModel.LeftParameter);
            case ConditionType.RightPath:
                return "Is_" + this.namingProvider.removeUnderscore(this.conditionModel.RightParameter) + "_" + this.namingProvider.getOperatorName(this.conditionModel.OperatorType) + "_" + this.namingProvider.renameIfBlank(this.conditionModel.LeftParameter);
            default:
                return "";
        }
    }
    onDataChanged($event) {
        this.generate();
    }
}