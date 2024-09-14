import chalk from "chalk";

export function displayResult(label: string): void {
  console.log(chalk.green(label));
  return;
}
