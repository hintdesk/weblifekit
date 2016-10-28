export class Condition {
    LeftCalculator:string;
    LeftCalculatorParam:string;
    LeftCondition: string;
    LeftPath: string;
    LeftValue:string;
    Name: string;
    Operator: string;
    RightCalculator:string;
    RightCalculatorParam:string;
    RightCondition: string;
    RightPath:string;
    RightRegExp:string;
    RightValue: string;

}

export class ConditionModel {
    LeftConditionType: ConditionType;
    LeftParameter: string = "";
    OperatorType: OperatorType;
    RightConditionType: ConditionType;
    RightParameter: string = "";
}

export class ConditionType {
    static LeftCalculator:string ="LeftCalculator";
    static LeftCondition: string = "LeftCondition";
    static LeftPath: string = "LeftPath";
    static LeftValue: string = "LeftValue"
    static RightCalculator:string = "RightCalculator";
    static RightCondition: string = "RightCondition";
    static RightRegExp:string = "RightRegExp";
    static RightPath: string = "RightPath";
    static RightValue: string = "RightValue";
}

export class OperatorType {
    static And: string = "&&";
    static Equals: string = "==";
    static GreaterThan: string = ">";
    static NotEqual: string = "!=";
    static SmallerThan: string = "<";
    static Or: string = "||";
}

export class CalculatorType {
    static StateTable:string = "stateTableCalculator";
}
