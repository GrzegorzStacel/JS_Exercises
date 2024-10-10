export function removeEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 !== 0);
}

export function sortDescending(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => b - a);
}

export function sum(numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}
