import { validateArray } from "../../helpers/validateArray.js";

export function filterEvenNumbers(numbers: number[]): number[] {
  validateArray(numbers);

  let tmpArray: number[] = [];

  numbers.forEach((item) => {
    if (item % 2 === 0) tmpArray.push(item);
  });

  return tmpArray;
}

export function filterEvenNumbersByFilter(numbers: number[]): number[] {
  validateArray(numbers);

  return numbers.filter((number) => number % 2 === 0);
}
