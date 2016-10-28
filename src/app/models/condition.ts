export class Condition {
    LeftPath: string;
    Name: string;
    Operator:string;
    RightValue:string;

}

export class ConditionModel {
    LeftConditionType: ConditionType;
    LeftParameter: string = "";
    OperatorType: OperatorType;
    RightConditionType: ConditionType;
    RightParameter: string ="";
}

export class ConditionType {
    static LeftCondition: string = "LeftCondition";
    static LeftPath: string = "LeftPath";
    static LeftValue: string = "LeftValue"
    static RightCondition: string = "RightCondition";
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