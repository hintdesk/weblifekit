import { Injectable } from '@angular/core';
import { Tariff} from '../../models/tariff';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TariffRepository {
    private getAll(): Tariff[] {
        var tariffs: Tariff[] =
            [
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteclassic select (ARB11)"]),
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Depot Basis Renteclassic select (ARB13)"]),
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest (FVB1)"]),
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest gegen Einmalbeitrag (FVB1E)"]),
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest Spezial (FVB4)"]),
                new Tariff(["Schicht 1/Private Vorsorge", "Basisrente", "Basis Renteinvest Spezial gegen Einmalbeitrag (FVB4E)"]),                
                
                new Tariff(["Schicht 1/Private Vorsorge", "Förder-Rentenversicherung", "VarioInvest FörderRente (FR12)"]),

                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Renteclassic select (AR14)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Depot Renteclassic (AR9)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Anlegerklasse 3","Einmalbeitrag","0 Jahre", "Sofort Renteclassic select (SR12)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Juniorinvest (FV10)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Juniorinvest gegen Einmalbeitrag (FVE0)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "VarioInvest Rente (FS10)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest (FV1)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest gegen Einmalbeitrag (FV1E)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Spezial (FV16)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Spezial gegen Einmalbeitrag (FVE6)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Vorsorgeinvest Premium (FS1)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Zurich VorsorgeFlex (FV57)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Privatrente", "Zurich VorsorgeFlex Spezial(FV58)"]),


                new Tariff(["Schicht 3/Private Vorsorge", "IndexRentenversicherung", "Vorsorgegarantie Plus (FV60)"]),

                new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "BerufsunfähigkeitsVorsorge (BU1)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Berufsunfähigkeitsversicherung", "ErwebsunfähigkeitsVorsorge (BU3)"]),

                new Tariff(["Schicht 3/Private Vorsorge", "Grundfähigkeitsabsicherung", "Grundfähigkeits-Schutzbrief (BU22)"]),

                new Tariff(["Schicht 3/Private Vorsorge", "Risiko Leben", "Risikoleben Basis (RIS17)"]),
                new Tariff(["Schicht 3/Private Vorsorge", "Risiko Leben", "Risikoleben Top (RIS18)"]),

                new Tariff(["Eagle Star Produktfamilie", "Eagle Star RisikoLeben-top (EAGLE1)"]),                
                new Tariff(["Eagle Star Produktfamilie", "Eagle Star RisikoLeben-basic (EAGLE2)"]),                
                new Tariff(["Eagle Star Produktfamilie", "Eagle Star Erweiterter Krankheits-Schutzbrief (EAGLE3)"]),                
                new Tariff(["Eagle Star Produktfamilie", "Eagle Star Krankheits-Schutzbrief (EAGLE4)"]),

                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Renteclassic select (AR14)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "BerufsunfähigkeitsVorsorge (BU1)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Vorsorgeinvest (FV1)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "Vorsorgeinvest Spezial (FV16)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "bAV Direktgarant (FV33)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Entgeltumwandlung", "bAV Direktgarant Spezial (FV34)"]),

                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Renteclassic select (AR14)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Renteclassic select - Stufenmodell (AR20)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "BerufsunfähigkeitsVorsorge (BU1)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "BerufsunfähigkeitsVorsorge SMART (BU25)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Vorsorgeinvest (FV1)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "Vorsorgeinvest Spezial (FV16)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "bAV Direktgarant (FV33)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "Direktversicherung - Firmenfinanziert", "bAV Direktgarant Spezial (FV34)"]),

                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Renteclassic select (AR14)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "VarioInvest Rente (FS10)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Vorsorgeinvest (FV1)"]),
                new Tariff(["Schicht 2/Betriebliche Altersversorgung", "U-Kasse", "Vorsorgeinvest Spezial (FV16)"]),
                
            ];
        return tariffs;
    }

    search(term:string) : Observable<Tariff[]> {
        var tariffs: Tariff[] = this.getAll();
        var foundTariffs = [];
        for (let tariff of tariffs) {
            if (tariff.toString().toLowerCase().indexOf(term.toLowerCase()) >= 0)
                foundTariffs.push(tariff);
        }
        return Observable.of(foundTariffs);
    }
}
