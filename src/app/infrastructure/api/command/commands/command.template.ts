import { Rule, RuleModel } from '../../../../models/rule';
import { CommandCopyMode, CommandEventType, ElementType } from '../../../../models/command';

export interface CommandTemplate {
    ConditionDescription: string;
    Description: string;
    canHandle(ruleModel: RuleModel): boolean;
    execute(ruleModel: RuleModel): Rule;
    getCopyModes():CommandCopyMode[];
    getDestinationElementTypes(): ElementType[];
    getDisplayNameTypes(): ElementType[];
    getErrorTextTypes(): ElementType[];
    getEventTypes(): CommandEventType[];
    getSourceElementTypes(): ElementType[];
    getSourcePropertyTypes(): ElementType[];
    getTargetPropertyTypes(): ElementType[];

}