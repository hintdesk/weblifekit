import { RuleModel }    from '../models/rule.model';
import { Rule }         from '../models/rule';
import { EventType, ElementType }  from '../models/command';

export interface CommandTemplate {
    canHandle(ruleModel: RuleModel): boolean;
    execute(ruleModel: RuleModel) : Rule;  
    getDestinationElementTypes():ElementType[];
    getDisplayNameTypes():ElementType[];
    getErrorTextTypes():ElementType[];
    getEventTypes():EventType[];
    getSourceElementTypes():ElementType[];
    getSourcePropertyTypes():ElementType[];
    getTargetPropertyTypes():ElementType[];

}