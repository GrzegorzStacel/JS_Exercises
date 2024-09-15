function removeEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 !== 0);
}

function sortDescending(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => b - a);
}

function sum(numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

export function multipleOperations() {
  const numbers = [5, 8, 12, 3, 19, 1, 25, 7];

  const oddNumbers: number[] = removeEvenNumbers(numbers);
  console.log("oddNumbers::: ", oddNumbers);

  const sortedNumbers: number[] = sortDescending(oddNumbers);
  console.log("sortedNumbers::: ", sortedNumbers);

  const sumNumber: number = sum(sortedNumbers);
  console.log("sumNumber::: ", sumNumber);
}
