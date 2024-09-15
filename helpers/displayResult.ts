import chalk from "chalk";

export function displayResult(result: string): void;
export function displayResult(result: string, array: number[] | object[]): void;

export function displayResult(param1: string, param2?: number[]): void {
  if (Array.isArray(param2)) {
    // Obsługa tablic
    console.dir(param2, { maxArrayLength: 10 });
    console.log(chalk.green(param1));
    return;
  }

  console.log(chalk.green(param1));
  return;
}
