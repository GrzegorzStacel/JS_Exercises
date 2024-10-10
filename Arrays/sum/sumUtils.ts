import { validateArray } from "../../helpers/validateArray";

export function sumArrayWithForEach(numbers: number[]): number {
  validateArray(numbers);
  let sum: number = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
}

export function sumArrayWithReduce(numbers: number[]): number {
  validateArray(numbers);

  const sum = numbers.reduce((sum, number) => sum + number, 0);
  return sum;
}
