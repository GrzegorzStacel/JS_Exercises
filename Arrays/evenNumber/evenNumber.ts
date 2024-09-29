//
//
// Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko liczby parzyste.
//
//
//

import chalk from "chalk";
import { measureFunctionTime } from "../../helpers/measureFunctionTime.js";
import { displayResult } from "../../helpers/displayResult.js";
import { displayInformations } from "../../helpers/displayInformations.js";
import { filterEvenNumbers, filterEvenNumbersByFilter } from "./filterUtils.js";

export function measureFilteringPerformance(array: number[], filterType: "forEach" | "filter"): void {
  console.log(chalk.blue(`Tablica (${array.length}) elementów. Użyta metoda: ${filterType}`));

  const filterFunction = filterType === "forEach" ? filterEvenNumbers : filterEvenNumbersByFilter;

  const result = measureFunctionTime(filterFunction, array, `Czas dla metody ${filterType}`);

  displayResult(`Liczba parzystych elementów: ${result.length}\n`, result);
}

export function evenNumber(smallArray: number[], veryLongArray: number[]): void {
  displayInformations("evenNumber", "Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko liczby parzyste.");

  // Wywołanie dla małej tablicy z różnymi metodami filtrowania
  measureFilteringPerformance(smallArray, "forEach");
  measureFilteringPerformance(smallArray, "filter");

  // Wywołanie dla dużej tablicy z różnymi metodami filtrowania
  measureFilteringPerformance(veryLongArray, "forEach");
  measureFilteringPerformance(veryLongArray, "filter");

  displayInformations("evenNumber");
}
