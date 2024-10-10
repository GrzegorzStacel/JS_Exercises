//
//
// Napisz funkcję, która znajdzie największą liczbę w podanej tablicy.
//
//

import chalk from "chalk";
import { measureFunctionTime } from "../../helpers/measureFunctionTime.js";
import { displayResult } from "../../helpers/displayResult.js";
import { displayInformations } from "../../helpers/displayInformations.js";
import { findMaxForLoop, findMaxMath } from "../findMax/findmaxUtils.js";

function measureFindMaxPerfomance(array: number[], findType: "ForLoop" | "Math"): void {
  console.log(chalk.blue(`Tablica (${array.length}) elementów. Użyta metoda: ${findType}`));

  const findTypeFunction = findType === "ForLoop" ? findMaxForLoop : findMaxMath;

  const result = measureFunctionTime(findTypeFunction, array, `Czas dla metody ${findType}`);

  displayResult(`Największa liczba: ${result}\n`);
}

export function findMax(): void {
  const numbers = [10, 25, 3, 99, 47, 12];
  const mockArray: number[] = Array.from({ length: 115000 }, (_, i) => i + 1);

  displayInformations("findMax", "Napisz funkcję, która znajdzie największą liczbę w podanej tablicy.");

  measureFindMaxPerfomance(numbers, "ForLoop"); // 99 (0.162ms)
  measureFindMaxPerfomance(numbers, "Math"); // 99 (0.137ms)

  // Wieksze liczby wywołują błąd z Math.max() z powodu przekroczenia maksymalnego rozmiaru (przynajmniej na mojej maszynie)
  measureFindMaxPerfomance(mockArray, "ForLoop"); // 115000 (2.083ms)
  measureFindMaxPerfomance(mockArray, "Math"); // 115000 (1.399ms)

  // measureFindMaxPerfomance([], "ForLoop"); // Test dla validateArray()

  displayInformations("findMax");
}
