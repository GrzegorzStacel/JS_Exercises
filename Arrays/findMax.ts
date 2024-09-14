//
//
// Napisz funkcję, która znajdzie największą liczbę w podanej tablicy.
//
//

import chalk from "chalk";
import { measureFunctionTime } from "../helpers/measureFunctionTime.js";
import { displayResult } from "../helpers/displayResult.js";
import { validateArray } from "../helpers/validateArray.js";

function findMaxForLoop(array: number[]): number {
  validateArray(array);

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

function findMaxMath(array: number[]): number {
  validateArray(array);

  const number = Math.max(...array);
  return number;
}

function measureFindMaxPerfomance(array: number[], findType: "ForLoop" | "Math"): void {
  console.log(chalk.blue(`\n\nTablica (${array.length}) elementów, używając metody: ${findType}`));

  const findTypeFunction = findType === "ForLoop" ? findMaxForLoop : findMaxMath;

  const result = measureFunctionTime(findTypeFunction, array, `Czas dla metody ${findType}`);

  displayResult(`Największa liczba: ${result}`);
}

export function findMax(): void {
  const numbers = [10, 25, 3, 99, 47, 12];
  const mockArray: number[] = Array.from({ length: 115000 }, (_, i) => i + 1);

  console.log(chalk.greenBright.bold("\n\nNapisz funkcję, która znajdzie największą liczbę w podanej tablicy."));
  console.log(chalk.underline.greenBright("Rozpoczynam zadanie 'findMax:'"));

  measureFindMaxPerfomance(numbers, "ForLoop"); // 99 (0.162ms)
  measureFindMaxPerfomance(numbers, "Math"); // 99 (0.137ms)

  // Wieksze liczby wywołują błąd z Math.max() z powodu przekroczenia maksymalnego rozmiaru (przynajmniej na mojej maszynie)
  measureFindMaxPerfomance(mockArray, "ForLoop"); // 115000 (2.083ms)
  measureFindMaxPerfomance(mockArray, "Math"); // 115000 (1.399ms)

  // measureFindMaxPerfomance([], "ForLoop"); // Test dla validateArray()

  console.log(chalk.red.underline("\nKoniec zadania 'findMax'\n"));
}
