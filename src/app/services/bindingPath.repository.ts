import { Injectable } from '@angular/core';
@Injectable()
export class BindingPathRepository {
    getBindingPaths() : string[] {
         const paths : string[] =[
             "BerechnungsErgebnis"
         ];
         return paths;
    }
}