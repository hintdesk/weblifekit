import { Injectable } from '@angular/core';
import { ElementType, CommandEventType } from '../models/command';
import { OperatorType } from '../models/condition';
import { RuleModel } from '../models/rule';

@Injectable()
export class NamingProvider {

    getForAddArrayElement(fieldName: string, array: string): string {
        return "Add_" + fieldName + "_To_Array_" + array;
    }

    getForAddItemAndShowGridDetails(fieldName: string, array: string, gridId: string): string {
        return "Add_" + fieldName + "_To_Array_" + array + "_In_Grid_" + gridId;
    }

    getForCalculate(calculator: string, calculatorArgument: string): string {
        return "Calculate_By_" + calculator + "_With_Argument_" + calculatorArgument;
    }

    getForConfirmCommandAndChangeSwitchValue(uiField: string, value: boolean): string {
        return "Confirm_Before_Switch_Changing_" + uiField + "_To_" + String(value);
    }

    getForCopyObject(source: string, destination: string): string {
        source = this.getLastElement(source);
        return "Copy_" + source;
    }

    getForDeleteArray(array: string): string {
        array = this.getLastElement(array);
        return "Delete_Selected_Item_From_Array_" + array;
    }
    getForGoToPage(page: string): string {
        return "Go_To_Page_" + page;
    }

    getForEnableGuiElements(uiElement: string): string {
        if (uiElement.indexOf(",") >= 0)
            return "Enable_Multiples";
        else
            return "Enable_" + uiElement;
    }

    getForErrorProvider(uiField: string): string {
        return "RequiredField_" + uiField;
    }

    getForErrorProviderAndNotify(uiField: string): string {
        return "RequiredFieldInList_" + uiField;
    }

    getForFireEvent(ruleModel: RuleModel): string {
        var event = ruleModel.EventName.replace(new RegExp("\\.", "g"), "_");
        if (ruleModel.CommandEventType === CommandEventType.EventDataPath)
            return "Trigger_Event_" + this.getLastElement(ruleModel.CommandEventTypeValue) + "_" + event;
        else
            return "Trigger_Event_" + event;
    }

    getForHideDetails(dialog: string): string {
        return "Hide_Dialog_" + dialog;
    }

    getForRemoveAllArrayElements(arrayField: string): string {
        arrayField = this.getLastElement(arrayField);
        return "Clear_List_" + arrayField;
    }

    getForRenameNavigationElement(page: string): string {
        return "Rename_Page_" + page + "_In_Navigation";
    }

    getForSetTextForAutoComplete(uiField: string): string {
        return "Set_AutoComplete_For" + uiField;
    }
    getForSetToDefault(uiField: string): string {
        return "Set_" + uiField + "_To_Default";
    }

    getForSetWarningInWarningProviderAndNotify(warningId: string): string {
        return "Set_Warning_" + warningId;
    }

    getForShowDialog(dialog: string): string {
        return "Show_Dialog_" + dialog;
    }

    getForShowGridDetails(grid: string): string {
        return "Show_Grid_Details_" + grid;
    }

    getForShowNavigationElement(navigationElement: string): string {
        if (navigationElement.indexOf(",") >= 0)
            return "Show_Multiple_In_Navigation";
        else
            return "Show_" + navigationElement + "_In_Navigation";
    }

    getForShowGuiElements(uiElement: string): string {
        if (uiElement.indexOf(",") >= 0)
            return "Show_Multiple_UI_Elements";
        else
            return "Show_" + uiElement;
    }

    getForHideGuiElements(uiElement: string): string {
        if (uiElement.indexOf(",") >= 0)
            return "Hide_Multiple_UI_Elements";
        else
            return "Hide_" + uiElement;
    }



    getForActionCommand(uiField: string, stateTableName: string): string {
        return "Apply_" + stateTableName + "_On_" + uiField;
    }

    getForValidate(uiField: string): string {
        return "Validate_" + uiField;
    }

    getOperatorName(operatorType: OperatorType) {
        switch (operatorType) {
            case OperatorType.And:
                return "And";
            case OperatorType.Equals:
                return "Equals";
            case OperatorType.GreaterThan:
                return "GreaterThan";
            case OperatorType.NotEqual:
                return "NotEqual";
            case OperatorType.Or:
                return "Or";
            case OperatorType.SmallerThan:
                return "SmallerThan";
        }
    }

    getSetViewModelPathByApplication(applicationName: string, targetProperty: string, sourceProperty: string): string {
        var targetProperty = this.getLastElement(targetProperty);
        var sourceProperty = this.getLastElement(sourceProperty);

        if (targetProperty && sourceProperty)
            return "Set_" + targetProperty + "_ByApplication_" + applicationName + "_With_" + sourceProperty;
        else
            return "Execute_" + applicationName;
    }
    getSetViewModelPath(elementType: ElementType, viewModelPath: string, value: string): string {
        var path = this.getLastElement(viewModelPath);

        value = this.renameIfBlank(value);
        value = this.getLastElement(value);

        var byDescription = "";
        switch (elementType) {
            case ElementType.Calculator:
                byDescription = "_ByStateTable_";
                break;
            case ElementType.Json:
                byDescription = "_ByObject_";
                break;
            case ElementType.SpringObjectName:
                byDescription = "_ByPath_";
                break;
            default:
                byDescription = "_ByValue_";
                break;
        }

        return "Set_" + path + byDescription + value;
    }



    getLastElement(path: string): string {
        if (path) {
            var paths = path.split(".");
            var result = path;
            if (paths.length > 1)
                result = paths[paths.length - 1];
        }

        result = this.upperCaseFirstLetter(result);

        return result;
    }

    getParentPath(path: string): string {
        if (path) {
            var paths = path.split(".");
            if (paths.length > 1)
                paths.pop();
        }
        return paths.join(".");
    }

    lowerCaseFirstLetter(name: string): string {
        return name.charAt(0).toLowerCase() + name.slice(1);
    }

    cleanUpText(text: string): string {
        text = text.replace(new RegExp("_", "g"), "");
        text = text.replace(new RegExp("'", "g"), "");
        text = text.replace(new RegExp(".", "g"), "");
        return text;
    }

    renameIfBlank(text: string): string {
        if (!text || text === "")
            text = "Blank";
        return text;
    }
    
    upperCaseFirstLetter(name: string): string {
        if (name && name.length > 0)
            return name.charAt(0).toUpperCase() + name.slice(1);
    }
}