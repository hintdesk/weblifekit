import { ElementType } from '../models/command';

export class NamingService {

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
        return "Delete_Array_" + array;
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

    getForFireEvent(event: string): string {
        event = event.replace(new RegExp("\\.", "g"), "_");
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



    getForActionCommand(uiField: string, stateTableName: string): string {
        return "Apply_" + stateTableName + "_On_" + uiField;
    }

    getValidate(uiField: string): string {
        return "Validate_" + uiField;
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

        if (!value || value === "")
            value = "Blank";
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
        return result;
    }
}