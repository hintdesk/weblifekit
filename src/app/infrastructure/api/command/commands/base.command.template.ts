import { CommandTemplate } from './command.template';
import { CommandCopyMode, CommandType, CommandEventType, ElementType } from '../../../../models/command';
import { Rule, RuleModel } from '../../../../models/rule';
import { ResourceTextService } from '../../../../infrastructure/resourceText.service';


export class BaseCommandTemplate extends ResourceTextService implements CommandTemplate {
    ConditionDescription: string;
    Description: string;
    Info: string;

    canHandle(ruleModel: RuleModel): boolean {
        return false;
    }

    execute(ruleModel: RuleModel): Rule {
        return undefined;
    }

    getCopyModes(): CommandCopyMode[] {
        return [CommandCopyMode.Object, CommandCopyMode.Properties];
    }
    getDestinationElementTypes(): ElementType[] {
        var result: ElementType[] = [
            ElementType.SpringObjectName
        ];
        return result;
    }

    getDisplayNameTypes(): ElementType[] {
        var result: ElementType[] = [
            ElementType.PlainText,
            ElementType.Calculator
        ];
        return result;
    }

    getErrorTextTypes(): ElementType[] {
        var result: ElementType[] = [
            ElementType.PlainText,
            ElementType.Resource

        ];
        return result;
    }

    getEventTypes(): CommandEventType[] {
        var result: CommandEventType[] = [
            CommandEventType.EventDataField,
            CommandEventType.EventDataPath,
            CommandEventType.EventTriggerField
        ];
        return result;
    }

    getSourceElementTypes(): ElementType[] {
        var result: ElementType[] = [
            ElementType.PlainText,
            ElementType.Calculator,
            ElementType.SpringObjectName,
            ElementType.Json
        ];
        return result;
    }

    getSourcePropertyTypes(): ElementType[] {
        var result: ElementType[] = [
            ElementType.PlainText,
            ElementType.SpringObjectName
        ];
        return result;
    }

    getTargetPropertyTypes(): ElementType[] {
        var result: ElementType[] = [
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