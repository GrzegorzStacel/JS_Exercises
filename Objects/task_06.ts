// Stwórz obiekt o nazwie tableGenerator.

// Obiekt ten powinien mieć tylko metody:
// randomNumber(min, max) - zwraca losową liczbę z przedziału min-max
// generateIncTable(nr) - zwraca nową tablicę z liczbami od 0 do nr
// generateRandomTable(lng, min, max) - zwraca nową tablice o długości lng z losowymi liczbami z przedziału min-max
// generateTableFromText(str) - generuje nową tablicę ze słowami z tekstu str Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica Wykorzystaj odpowiednią metodę dla String
// getMaxFromTable(arr) - zwraca największą liczbę z tablicy arr
// getMinFromTable(arr) - zwraca najmniejszą liczbę z tablicy arr
// delete(arr, index) - usuwa z tablicy arr element o indexie index

import { basicValidatorNumber, basicValidatorString } from "../helpers/basicValidators.js";
import { validateArray } from "../helpers/validateArray.js";

interface Generator {
  randomNumber(min: number, max: number): void;
  generateIncTable(nr: number): void;
  generateRandomTable(lng: number, min: number, max: number): void;
  generateTableFromText(str: string): void | [];
  getMaxFromTable(arr: number[]): void;
  getMinFromTable(arr: number[]): void;
  delete(arr: number[], index: number): void;
}

const tableGenerator: Generator = {
  randomNumber(min: number, max: number): void {
    if (!basicValidatorNumber(min) || !basicValidatorNumber(max)) return;

    const result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result);
  },

  generateIncTable(nr: number): void {
    if (!basicValidatorNumber(nr)) return;

    const table: number[] = Array.from({ length: nr }, (_, i) => i);

    // for (let i = 0; i < nr; i++) {
    //   table.push(i);
    // }

    console.table(table);
  },

  generateRandomTable(lng: number, min: number, max: number): void {
    if (!basicValidatorNumber(lng) || !basicValidatorNumber(min) || !basicValidatorNumber(max)) return;

    const table: number[] = [];

    for (let i = 0; i < lng; i++) {
      table.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    console.table(table);
  },

  generateTableFromText(str: string): void | [] {
    if (!basicValidatorString(str)) return [];
    const splittedText = str.split(" ");
    console.table(splittedText);
  },

  getMaxFromTable(arr: number[]): void {
    validateArray(arr);

    const maxNumber = Math.max(...arr);
    console.log(maxNumber);
  },

  getMinFromTable(arr: number[]): void {
    validateArray(arr);

    const minNumber = Math.min(...arr);
    console.log(minNumber);
  },

  delete(arr: number[], index: number): void {
    const tableAterDelete: number[] = [...arr];
    tableAterDelete.splice(index, 1);
    console.table(tableAterDelete);
  },
};

export function runTask_06() {
  console.log("\n");

  tableGenerator.randomNumber(10, 20);
  tableGenerator.generateIncTable(10);
  tableGenerator.generateRandomTable(10, 4, 6);
  tableGenerator.generateTableFromText("Make a noise and then be silent.");
  tableGenerator.getMaxFromTable([7, 5, 1, 0, 9, 3]);
  tableGenerator.getMinFromTable([7, 5, 1, 0, 9, 3]);
  tableGenerator.delete([7, 5, 1, 0, 9, 3], 1);

  console.log("\n");
}
