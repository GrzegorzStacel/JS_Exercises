//
//
// Napisz funkcję, która zsumuje wszystkie liczby w tablicy.
//
//

import chalk from "chalk";
import { displayInformations } from "../../helpers/displayInformations.js";
import { displayResult } from "../../helpers/displayResult.js";
import { measureFunctionTime } from "../../helpers/measureFunctionTime.js";
import { sumArrayWithForEach, sumArrayWithReduce } from "./sumUtils.js";

function measureSumPerformance(numbers: number[], findType: "ForEach" | "Reduce") {
  console.log(chalk.blue(`Tablica (${numbers.length}) elementów. Użyta metoda: ${findType}`));

  const findTypeFunction = findType === "ForEach" ? sumArrayWithForEach : sumArrayWithReduce;

  const result = measureFunctionTime(findTypeFunction, numbers, `Czas dla metody ${findType}`);

  displayResult(`Suma podanych liczb: ${result}\n`);
}

export function sum(veryLongArray: number[]): void {
  displayInformations("sum", "Napisz funkcję, która zsumuje wszystkie liczby w tablicy.");

  const numbers = [5, 10, 15, 20];

  measureSumPerformance(numbers, "ForEach");
  measureSumPerformance(numbers, "Reduce");

  measureSumPerformance(veryLongArray, "ForEach");
  measureSumPerformance(veryLongArray, "Reduce");

  displayInformations("sum");
}
