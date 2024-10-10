import { validateArray } from "../../helpers/validateArray.js";

export function findMaxForLoop(array: number[]): number {
  validateArray(array);

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

export function findMaxMath(array: number[]): number {
  validateArray(array);

  const number = Math.max(...array);
  return number;
}
