import chalk from "chalk";

// Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko liczby parzyste.

function filterEvenNumbers(numbers: number[]): number[] {
  let tmpArray: number[] = [];

  numbers.forEach((item) => {
    if (item % 2 === 0) tmpArray.push(item);
  });

  return tmpArray;
}

function filterEvenNumbersByFilter(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

function displayResult(result: number[]): void {
  console.dir(result, { maxArrayLength: 10 });
  console.log(`Liczba parzystych elementów: ${result.length}\n`);
}

function measureFilteringPerformance(array: number[], filterType: "forEach" | "filter"): void {
  console.log(chalk.green(`Tablica (${array.length}) elementów, używa metody: ${filterType}`));

  const filterFunction = filterType === "forEach" ? filterEvenNumbers : filterEvenNumbersByFilter;

  console.time(chalk.yellow(`Czas dla metody ${filterType}`));
  const result = filterFunction(array);
  console.timeEnd(chalk.yellow(`Czas dla metody ${filterType}`));

  displayResult(result);
}

export function evenNumber(smallArray: number[], veryLongArray: number[]): void {
  console.log(chalk.blue('\n\nRozpoczynam zadanie "evenNumber"\n'));

  // Wywołanie dla małej tablicy z różnymi metodami filtrowania
  measureFilteringPerformance(smallArray, "forEach");
  measureFilteringPerformance(smallArray, "filter");

  // Wywołanie dla dużej tablicy z różnymi metodami filtrowania
  measureFilteringPerformance(veryLongArray, "forEach");
  measureFilteringPerformance(veryLongArray, "filter");

  console.log(chalk.blue("Koniec zadania 'evenNumber'\n\n\n"));
}
