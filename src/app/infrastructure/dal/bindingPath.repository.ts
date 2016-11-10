import { Injectable } from '@angular/core';
@Injectable()
export class BindingPathRepository {
    getAll() : string[] {
         const paths : string[] =[
             "BerechnungsEingaben",
             "BerechnungsErgebnis",
             "BerechnungsEingaben.VersicherungsNehmer",
             "BerechnungsEingaben.WirtschaftlichBerechtigter",
             "BerechnungsEingaben.HauptTarif.Hochrechnungszins1",             
         ];
         return paths;
    }
}