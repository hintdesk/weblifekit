import { CommandTemplate } from './command.template';
import { RuleModel } from '../models/rule.model';
import { CommandType, EventType, ElementType } from '../models/command';
import { Rule, } from '../models/rule';


export class BaseCommandTemplate implements CommandTemplate {

    canHandle(ruleModel: RuleModel): boolean {
        return false;
    }

    execute(ruleModel: RuleModel): Rule {
        return undefined;
    }

    getDestinationElementTypes():ElementType[]{
        var result : ElementType[] = [
            ElementType.SpringObjectName
        ];
        return result;
    }

    getDisplayNameTypes():ElementType[]{
        var result : ElementType[] = [
            ElementType.PlainText,
            ElementType.Calculator
        ];
        return result;
    }

    getErrorTextTypes():ElementType[]{
        var result : ElementType[] = [
            ElementType.PlainText,
            ElementType.Resource

        ];
        return result;
    }

    getEventTypes():EventType[]{
        var result : EventType[]=[
            EventType.EventDataField,
            EventType.EventDataPath,
            EventType.EventTriggerField
        ];
        return result;
    }

    getSourceElementTypes(): ElementType[] {
        var result : ElementType[] = [
            ElementType.PlainText,
            ElementType.Calculator,
            ElementType.SpringObjectName,
            ElementType.Json
        ];
        return result;
    }

    getSourcePropertyTypes(): ElementType[]{
        var result : ElementType[] = [
            ElementType.PlainText,
            ElementType.SpringObjectName     
        ];
        return result;
    }

    getTargetPropertyTypes():ElementType[]{
        var result : ElementType[] = [
            ElementType.PlainText,
            ElementType.SpringObjectName     
        ];
        return result;        
    }

    getValueForNaming(ruleModel: RuleModel): string {
        var value = "";

        if (ruleModel.SourceElementType === ElementType.Calculator)
            value = ruleModel.CalculatorArgumentValue;
        else if (ruleModel.SourceElementType === ElementType.Json)
            value = ruleModel.JsonTypeName;
        else
            value = ruleModel.SourceElementValue;

        return value;
    }
}