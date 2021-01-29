//sorter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sorter'
})
/**
  * A kapott tömb rendezése a szűrőkifejezés alapján.
  * @param value {any[]} - a tömb.
  * @param key {string} - az objektum kulcs, ami alapján rendez.
  * @returns {any[]} - a kulcs alapján rendezett tömb.
  */
export class SorterPipe implements PipeTransform {

    transform(value: any[], key: string): any[] {
        // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
        //return value;

        /**
         * FELADAT!
         * Ellenőrzés: ha a value nem tömb, vagy nincs megadva a key,
         * térj vissza a value változóval.
         */
        if (!Array.isArray(value) || !key)
            return value;

        /**
         * FELADAT!
         * Térj vissza a value.sort metódus eredményével!
         * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
         * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusra,
         *  azután alakítsd őket kisbetűssé.
         * 3. Térj vissza a két string localeCompare metódus által visszaadott
         *  összehasonlításának az eredményével.
         */
        key = key.toLowerCase();
        return value.sort((a, b) => {
            if (isNaN(a[key]) || isNaN(b[key])) {
                const a_str: string = ('' + a[key]).toLowerCase();
                const b_str: string = ('' + b[key]).toLowerCase();
                return a_str.localeCompare(b_str);
            }
            else {
                return a[key] - b[key];
            }
        })
    }
}






