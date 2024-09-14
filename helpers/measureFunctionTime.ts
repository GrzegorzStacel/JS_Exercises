import chalk from "chalk";

// Generic higher-order function
export function measureFunctionTime<T, U>(func: (arg: T) => U, arg: T, label: string): U {
  console.time(chalk.yellow(label));
  const result = func(arg);
  console.timeEnd(chalk.yellow(label));
  return result;
}
