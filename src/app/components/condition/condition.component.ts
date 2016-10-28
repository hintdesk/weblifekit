import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConditionModel, ConditionType, OperatorType } from '../../models/condition';
import { ResourceTextComponent } from '../resourceText.component';

@Component({
    selector: 'condition',
    templateUrl: 'condition.component.html'
})

export class ConditionComponent extends ResourceTextComponent implements OnInit {
    @Input()
    conditionModel: ConditionModel;

    @Output()
    onDataChanged = new EventEmitter();


    leftConditionTypes: ConditionType[] = [
        ConditionType.LeftCalculator,
        ConditionType.LeftCondition,
        ConditionType.LeftPath,
        ConditionType.LeftValue
    ];
    operatorTypes: OperatorType[] = [
        OperatorType.And,
        OperatorType.Equals,
        OperatorType.GreaterThan,
        OperatorType.NotEqual,
        OperatorType.SmallerThan,
        OperatorType.Or
    ];

    rightConditionTypes: ConditionType[] = [
        ConditionType.RightCalculator,
        ConditionType.RightCondition,
        ConditionType.RightRegExp,
        ConditionType.RightPath,    
        ConditionType.RightValue,
    ];

    leftParameterPlaceholder: string;
    rightParameterPlaceholder: string;

    ngOnInit() {
        this.conditionModel.LeftConditionType = ConditionType.LeftPath;
        this.conditionModel.OperatorType = OperatorType.Equals;
        this.conditionModel.RightConditionType = ConditionType.RightValue;
        this.onConditionTypeChanged(undefined);
    }

    
    onConditionTypeChanged($event) {
        this.leftParameterPlaceholder = this.getParameterPlaceholder(this.conditionModel.LeftConditionType);
        this.rightParameterPlaceholder = this.getParameterPlaceholder(this.conditionModel.RightConditionType);

        if (this.conditionModel.LeftConditionType == ConditionType.LeftCondition && this.conditionModel.RightConditionType == ConditionType.RightCondition)
            this.conditionModel.OperatorType = OperatorType.And;

        if (this.conditionModel.RightConditionType == ConditionType.RightRegExp)
            this.conditionModel.OperatorType = OperatorType.Equals;

        this.onModelDataChanged($event);
    }

    getParameterPlaceholder(conditionType:ConditionType){
        switch (conditionType) {
            case ConditionType.LeftCalculator:
            case ConditionType.RightCalculator:
                return this.TextPlaceholderStateTable;
            case ConditionType.LeftCondition:
            case ConditionType.RightCondition:
                return this.TextPlaceholderConditionName;                
            case ConditionType.LeftPath:
            case ConditionType.RightPath:
                return this.TextPlaceholderSpringObjectName;                
            case ConditionType.LeftValue:
            case ConditionType.RightValue:
                return this.TextPlaceholderConditionValue;                
            default:
                return "";                
        }
    }

    onModelDataChanged($event): void {
        this.onDataChanged.emit($event);
    }
}