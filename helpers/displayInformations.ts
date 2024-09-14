import chalk from "chalk";

export function displayInformations(nameOfFunction: string): void;
export function displayInformations(nameOfFunction: string, task: string): void;

export function displayInformations(param1: string, param2?: string): void {
  if (param2) {
    console.log(chalk.greenBright.bold(`\n\n${param2}`));
    console.log(chalk.underline.greenBright(`Rozpoczynam zadanie '${param1}:'`));
  } else {
    console.log(chalk.red.underline(`\nKoniec zadania ${param1}'\n\n\n`));
  }
}
