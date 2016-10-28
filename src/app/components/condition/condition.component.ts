import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConditionModel, ConditionType, OperatorType } from '../../models/condition.model';
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
        ConditionType.LeftCondition,
        ConditionType.LeftPath,
        ConditionType.LeftValue
    ];
    operatorTypes: OperatorType[] = [
        OperatorType.And,
        OperatorType.Equal,
        OperatorType.GreaterThan,
        OperatorType.NotEqual,
        OperatorType.SmallerThan,
        OperatorType.Or
    ];

    rightConditionTypes: ConditionType[] = [
        ConditionType.RightCondition,
        ConditionType.RightPath,
        ConditionType.RightValue,
    ];

    leftParameterPlaceholder: string;
    rightParameterPlaceholder: string;

    ngOnInit() {
        this.conditionModel.LeftConditionType = ConditionType.LeftPath;
        this.conditionModel.OperatorType = OperatorType.Equal;
        this.conditionModel.RightConditionType = ConditionType.RightPath;
        this.onConditionTypeChanged(undefined);
    }

    onConditionTypeChanged($event) {
        this.leftParameterPlaceholder = this.getParameterPlaceholder(this.conditionModel.LeftConditionType);
        this.rightParameterPlaceholder = this.getParameterPlaceholder(this.conditionModel.RightConditionType);
        this.onModelDataChanged($event);
    }

    getParameterPlaceholder(conditionType:ConditionType){
        switch (conditionType) {
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