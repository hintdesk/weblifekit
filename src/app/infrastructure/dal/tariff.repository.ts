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
                            var impeoKey = (<string>row.NeueImpeoID).split(".")[0];
                            if (schichtProduktgruppe[row.Produktgruppe])                            
                                tarifExternLookUp[row.NeueImpeoID] = { Prefix: [schichtProduktgruppe[row.Produktgruppe] + "/" + row.Kachel, row.Produktgruppe], Suffix: row.Werbename + " (" + impeoKey + ")" }
                            else
                                tarifExternLookUp[row.NeueImpeoID] = { Prefix: [row.Kachel, row.Produktgruppe], Suffix: row.Werbename + " (" + impeoKey + ")" }
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
                                if (row.ChancenRisikoKlasse)
                                    paths.push(row.ChancenRisikoKlasse)
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
