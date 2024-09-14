import chalk from "chalk";

export function displayResult(result: string): void;
export function displayResult(result: string, array: number[]): void;

export function displayResult(param1: string, param2?: number[]): void {
  if (Array.isArray(param2)) {
    // Obsługa tablic
    console.dir(param2, { maxArrayLength: 10 });
    console.log(chalk.green(`Liczba parzystych elementów: ${param2.length}`));
    return;
  }

  console.log(chalk.red(param1));
  return;
}
