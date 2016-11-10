import { Rule ,RuleModel}         from '../../../../models/rule';
import { CommandEventType, ElementType }  from '../../../../models/command';

export interface CommandTemplate {
    Description:string;
    canHandle(ruleModel: RuleModel): boolean;
    execute(ruleModel: RuleModel) : Rule;  
    getDestinationElementTypes():ElementType[];
    getDisplayNameTypes():ElementType[];
    getErrorTextTypes():ElementType[];
    getEventTypes():CommandEventType[];
    getSourceElementTypes():ElementType[];
    getSourcePropertyTypes():ElementType[];
    getTargetPropertyTypes():ElementType[];

}