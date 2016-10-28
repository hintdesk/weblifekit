import { Component, OnInit } from '@angular/core';
import { Condition, ConditionModel, ConditionType } from '../../models/condition';
import { NamingService } from '../../services/naming.service';

@Component({
    selector: 'conditions',
    templateUrl: 'conditions.component.html'
})

export class ConditionsComponent {
    conditionModel: ConditionModel = new ConditionModel();
    result: string;

    constructor(private namingService: NamingService) {
    }

    generate() {
        var condition = new Condition();
        condition.Name = "";
        
        if (this.conditionModel.LeftConditionType == ConditionType.LeftPath) {
            if (this.conditionModel.RightConditionType == ConditionType.RightValue) {
                var value = this.conditionModel.RightParameter;
                if (!value)
                    value = "Blank";
                condition.Name = "Is_" + this.namingService.getLastElement(this.conditionModel.LeftParameter) + "_" + this.namingService.getOperatorName(this.conditionModel.OperatorType) + "_" + value;
            }
        }

        switch(this.conditionModel.LeftConditionType)
        {
            case ConditionType.LeftPath:
                condition.LeftPath = this.conditionModel.LeftParameter;
                break;
        } 

        condition.Operator = String(this.conditionModel.OperatorType);

        switch (this.conditionModel.RightConditionType) {
            case ConditionType.RightValue:
                condition.RightValue = this.conditionModel.RightParameter;
                break;
        }


        this.result = JSON.stringify(condition, undefined, 4);
    }
    onDataChanged($event) {
        this.generate();
    }
}