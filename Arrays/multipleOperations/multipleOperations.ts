import { removeEvenNumbers, sortDescending, sum } from "./multipleOperationsUtils.js";

export function multipleOperations() {
  const numbers = [5, 8, 12, 3, 19, 1, 25, 7];

  const oddNumbers: number[] = removeEvenNumbers(numbers);
  console.log("oddNumbers::: ", oddNumbers);

  const sortedNumbers: number[] = sortDescending(oddNumbers);
  console.log("sortedNumbers::: ", sortedNumbers);

  const sumNumber: number = sum(sortedNumbers);
  console.log("sumNumber::: ", sumNumber);
}
