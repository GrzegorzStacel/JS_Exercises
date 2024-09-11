export function evenNumber(): void {
  // Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko liczby parzyste.
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterEvenNumbers(nums)); // [2, 4, 6, 8, 10]
}

function filterEvenNumbers(numbers: number[]): number[] {
  let tmpArray: number[] = [];

  numbers.forEach((item) => {
    if (item % 2 === 0) tmpArray.push(item);
  });

  return tmpArray;
}
