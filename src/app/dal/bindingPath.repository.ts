import { Injectable } from '@angular/core';
@Injectable()
export class BindingPathRepository {
    getAll() : string[] {
         const paths : string[] =[
             "BerechnungsErgebnis"
         ];
         return paths;
    }
}