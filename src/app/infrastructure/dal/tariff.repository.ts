import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Tariff } from '../../models/tariff';


@Injectable()
export class TariffRepository {
    allTariffs: Tariff[] = [];

    constructor(private http: Http) {

    }
    // private getAll(): Tariff[] {
    //     if (!this.allTariffs)
    //         this.loadAll().then(result=> this.allTariffs = result);
    //     return this.allTariffs;
    //     // var tariffs: Tariff[] =
    //     //     [
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteclassic select (ARB11)"]),
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Depot Basis Renteclassic select (ARB13)"]),
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest (FVB1)"]),
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest gegen Einmalbeitrag (FVB1E)"]),
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest Spezial (FVB4)"]),
    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest Spezial gegen Einmalbeitrag (FVB4E)"]),

    //     //         new Tariff(["Schicht 1/Private Vorsorge", "Förder-Rentenversicherung", "VarioInvest FörderRente (FR12)"]),

    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Renteclassic select (AR14)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Depot Renteclassic (AR9)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Anlegerklasse 1", "Einmalbeitrag", "0 Jahre", "Sofort Renteclassic select (SR12)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Juniorinvest (FV10)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Juniorinvest gegen Einmalbeitrag (FVE0)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "VarioInvest Rente (FS10)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest (FV1)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest gegen Einmalbeitrag (FV1E)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Spezial (FV16)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Spezial gegen Einmalbeitrag (FVE6)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Premium (FS1)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Zurich VorsorgeFlex (FV57)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Zurich VorsorgeFlex Spezial(FV58)"]),


    //     //         new Tariff(["Schicht 3/Private Vorsorge", "IndexRentenversicherung", "Vorsorgegarantie Plus (FV60)"]),

    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "BerufsunfähigkeitsVorsorge (BU1)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "ErwebsunfähigkeitsVorsorge (BU3)"]),

    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Grundfähigkeitsabsicherung", "Grundfähigkeits-Schutzbrief (BU22)"]),

    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Risiko Leben", "Risikoleben Basis (RIS17)"]),
    //     //         new Tariff(["Schicht 3/Private Vorsorge", "Risiko Leben", "Risikoleben Top (RIS18)"]),

    //     //         new Tariff(["Eagle Star Produktfamilie", "Eagle Star RisikoLeben-top (EAGLE1)"]),
    //     //         new Tariff(["Eagle Star Produktfamilie", "Eagle Star RisikoLeben-basic (EAGLE2)"]),
    //     //         new Tariff(["Eagle Star Produktfamilie", "Eagle Star Erweiterter Krankheits-Schutzbrief (EAGLE3)"]),
    //     //         new Tariff(["Eagle Star Produktfamilie", "Eagle Star Krankheits-Schutzbrief (EAGLE4)"]),

    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Renteclassic select (AR14)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "BerufsunfähigkeitsVorsorge (BU1)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Vorsorgeinvest (FV1)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Vorsorgeinvest Spezial (FV16)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "bAV Direktgarant (FV33)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "bAV Direktgarant Spezial (FV34)"]),

    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Renteclassic select (AR14)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Renteclassic select - Stufenmodell (AR20)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "BerufsunfähigkeitsVorsorge (BU1)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Vorsorgeinvest (FV1)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Vorsorgeinvest Spezial (FV16)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "bAV Direktgarant (FV33)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "bAV Direktgarant Spezial (FV34)"]),

    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Renteclassic select (AR14)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "VarioInvest Rente (FS10)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Vorsorgeinvest (FV1)"]),
    //     //         new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Vorsorgeinvest Spezial (FV16)"]),

    //     //     ];
    //     // return tariffs;
    // }

    search(term: string): Observable<Tariff[]> {

        var foundTariffs = [];
        for (let tariff of this.allTariffs) {
            if (tariff.toString().toLowerCase().indexOf(term.toLowerCase()) >= 0)
                foundTariffs.push(tariff);
        }
        return Observable.of(foundTariffs);
    }

    init() {
        var url = "";
        if (window.location.href.indexOf("github") > 0)
            url = "/weblifekit/assets/products.json";
        else
            url = "/assets/products.json";
        return this.http.get(url)
            .toPromise()
            .then(response => {
                var tariffs: Tariff[] = [];
                var excel = response.json();

                var schichtProduktgruppe = {};
                schichtProduktgruppe['Basisrente'] = "Schicht 1";
                schichtProduktgruppe['Berufsunfähigkeitsversicherung'] = "Schicht 3";
                schichtProduktgruppe['Direktversicherung - Entgeltumwandlung'] = "Schicht 2";
                schichtProduktgruppe['Direktversicherung - Firmenfinanziert'] = "Schicht 2";
                schichtProduktgruppe['Förder-Rentenversicherung'] = "Schicht 1";
                schichtProduktgruppe['Grundfähigkeitsabsicherung'] = "Schicht 3";
                schichtProduktgruppe['IndexRentenversicherung'] = "Schicht 3";
                schichtProduktgruppe['Privatrente'] = "Schicht 3";
                schichtProduktgruppe['Risiko Leben'] = "Schicht 3";
                schichtProduktgruppe['U-Kasse'] = "Schicht 2";



                var tarifExternLookUp = {};
                for (let workSheet of excel.Worksheets) {
                    if (workSheet.Name === "Tarife-Extern") {
                        for (let row of workSheet.Rows) {
                            if (schichtProduktgruppe[row.Produktgruppe])
                                tarifExternLookUp[row.NeueImpeoID] = { Prefix: [schichtProduktgruppe[row.Produktgruppe] + "/" + row.Kachel, row.Produktgruppe], Suffix: row.Werbename + " (" + row.PURKey + ")" }
                            else
                                tarifExternLookUp[row.NeueImpeoID] = { Prefix: [row.Kachel, row.Produktgruppe], Suffix: row.Werbename + " (" + row.PURKey + ")" }
                        }
                    }
                }

                for (let workSheet of excel.Worksheets) {
                    if (workSheet.Name === "Produkteinschraenkung") {
                        for (let row of workSheet.Rows) {
                            var paths = [];
                            if (tarifExternLookUp[row.NeueImpeoID]) {
                                for (let element of tarifExternLookUp[row.NeueImpeoID].Prefix)
                                    paths.push(element);
                                if (row.GesamtRisikoInd)
                                    paths.push(row.GesamtRisikoInd);
                                if (row.Beitragszahlungsweise)
                                    paths.push(row.Beitragszahlungsweise);
                                if (row.LaufzeitinJahren)
                                    paths.push(row.LaufzeitinJahren);
                                paths.push(tarifExternLookUp[row.NeueImpeoID].Suffix)
                                this.allTariffs.push(new Tariff(paths));
                            }
                        }
                    }
                }


            })
            .catch(err => {
                console.log(err);
            });

    }
}
