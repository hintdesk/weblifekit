export class ResourceTextService {

    TextCommandDescriptionDeleteArrayElements:string = "Delete element with flag Deleted = true from given array";

    TextPlaceholderApplicationName: string = "Name of C# application class: TariffServiceGetOrderApplication, TariffServiceGetOrderForESignatureApplication, ESignatureApplication, etc.";
    TextPlaceholderArrayField:string = "Path of viewModel's list: BerechnungsEingaben.Extension.SteuerDetailsAuslandVersNehmer, FirmenDaten.PersonKonten, AnsprechPartner, etc.";
    TextPlaceholderArrayFieldNameAdd:string = "A custom name for adding object: WeiterePartner, BerechnungsEingaben.Extension.SteuerDetailsAuslandVersNehmer, GehaltsAngabe, etc.";
    TextPlaceholderCalculator: string = "Name of supported calculator in calculators-x.x.x.js: fondsPercentageDistributedCalculator, fondsPercentageSumCalculator, etc. ";
    TextPlaceholderCalculatorArgument: string = "Name of supported calculator argument in calculators-x.x.x.js: titelFondsauswahl, etc.";
    TextPlaceholderCommandParameter:string = "Parameter for command: tablePersonList, etc."
    TextPlaceholderErrorTextPlainText: string = "Hardcoded text for error: Bitte wählen Sie die gewünschte Form des Persönlichen Vorschlag / Produktinformationsblatt aus!, etc.";
    TextPlaceholderErrorTextResource: string = "Use DynRes for error: Dyn7272, Dyn7273, Dyn8471, etc.";
    TextPlaceholderColumnIndex: string = "An integer value: 1, 2, 3, etc.";
    TextPlaceholderConditionName:string ="Name of a condition: MandantIsDHL, MandantIsZlat, HasVP2Condition, etc.";
    TextPlaceholderConditionValue: string = "Value for comparison: blank, undefined, true, etc.";
    TextPlaceholderCustomCommandName:string = "Name of customCommand: triggerVorgangDataSourceChangeCommand, setVorgangStatusinApplicationCommand, addEventHandlerCommand, etc.";
    TextPlaceholderDialog : string = "Name of dialog (same with section tab in .xml file): AntragDruckPopUp, AntragBrDoKuDruck_InfoBox_2, AntragGwgIsa, etc.";
    TextPlaceholderDisplayNameValueCalculator:string ="Name of stateTable returning new name for page: ZV.Label, etc.";
    TextPlaceholderDisplayNameValuePlainText:string = "New name for page: 1. Versicherungsnehmer, Versicherungsnehmer, Versicherte Person 1, etc.";    
    TextPlaceholderErrorEventName: string = "Name of event which should be triggered after action failes: kernelIntegration.calculationFailed, Ais.calculationFailed, etc.";
    TextPlaceholderEventName: string = "Name of event which should be triggered after action executes successfully: command.TariffServiceGetOrderApplicationDone, command.TariffServiceGetOrderForESignatureApplicationDone, command.ESignatureApplicationOnOnDruckDone etc.";
    TextPlaceholderEventTypeValueDataField:string = "Argument as value path of viewModel's property, can be blank to handler: selectedVorgang, etc.";
    TextPlaceholderEventTypeValueDataPath:string ="Path of viewModel's property as trigger: BerechnungsEingaben.HauptTarif.VersichertePerson.Geburtsdatum, etc.";
    TextPlaceholderEventTypeValueTriggerField: string ="UI field as trigger: AntragDruck, AntragVN, etc.";
    TextPlaceholderGridId:string = "Grid id: ansprechPartnerGrid, beraterGrid, mitarbeiterDataGrid etc."
    TextPlaceholderId:string = "Warning Id: EinmalZZDel, LaufendeZZDel, FlexZZDel, etc.";
    TextPlaceholderInfoText: string = "Text for waiting message: Antrag wird erstellt ..., Autuev Daten werden generiert..., Tarifberechnung läuft..., etc.";
    TextPlaceholderJsonTypeAssemblyName: string = "Name of .dll where C# class locates: Impeo.WebLife.Model, Impeo.Dmo.Pocos, Impeo.Dmo.Model, etc.";
    TextPlaceholderJsonTypeName: string = "C# class with namespace: Impeo.WebLife.Model.Beratungsdokumetation.Gespraechspartner, etc.";
    TextPlaceholderHeight:string = "An integer value for dialog's height: 250, 600, 450, etc.";
    TextPlaceholderListProperty: string = "Path of viewModel's list: BerechnungsEingaben.HauptTarif.LebenFondsAnsparphase.Fonds, etc.";
    TextPlaceholderMessage:string = "Hardcode text for warning message: Aufgrund Ihrer Eingabe wurde die bereits erfassten Daten für die einmalige Zuzahlungen gelöscht, etc.";
    TextPlaceholderPageName: string = "Name of page: ESignature, AntragVN, Risikocheck-ErgebnisRisiko, etc.";
    TextPlaceholderParentUIElement:string = "Name of parent ui element: ";
    TextPlaceholderSourceElementValueBindingPath: string = "BindingPath of UIField: BerechnungsEingaben.VersicherungsNehmer.PersonAdressen[0].Ort, etc.";    
    TextPlaceholderSourceElementValuePlainText: string = "A string value:blank, ZVB_VERWEND_ZWECK_JUNIOR, ZVB_VERWEND_ZWECK_VORSORGE, etc.";
    TextPlaceholderSourceProperty: string = "Argument sent to application, can be a path of viewModels's property. If nothing is given, the current viewModel will be sent to server: BerechnungsEingaben.Extension.BezugsrechtErlebensfall.BezugsBerechtigtePerson.PersonKonten[0], etc.";
    TextPlaceholderSpringObjectName: string = "Path of viewModel's property: BerechnungsEingaben.Vermittler.Vermittler[0].PersonVermittler.PersonAdressen[0].Ort, etc.";
    TextPlaceholderStateTable: string = "Name of stateTable: Show_ERKL_AUSLAND_VN, Show_AUFZGWG, Set_Beratungsprotokoll, etc.";
    TextPlaceholderStateTableErrorText:string = "Name of stateTable returning error text: IBAN_Fehlermeldung_Bezugrecht, BezTod_GeburtsdatumMin, BezRechtTodEintrittsalterMax, etc.";
    TextPlaceholderTargetProperty: string = "Argument to be updated with value returned by application, is a path of viewModels's property: this, BerechnungsEingaben.Extension.BezugsrechtErlebensfall.BezugsBerechtigtePerson.PersonKonten[0], etc.";
    TextPlaceholderTemplateId: string = "Template id of grid: ansprechPartnerGridEditTemplate, beraterGridEditTemplate, mitarbeiterDataGridEditTemplate, etc.";
    TextPlaceholderTitleDialog:string = "Title of dialog: Meldung, blank, Info";
    TextPlaceholderUIField: string = "Name of ui field: A_DR_PERS_VORSCHLAG, A_DR_PRODUKTINFO, A_DR_ZUSTIMM_SONST_DATEN, etc."
    TextPlaceholderWidth:string = "An integer value for dialog's width: 550, 300, 500, etc."
}