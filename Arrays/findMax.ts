function findMaxLoop(array: number[]): number {
  console.time("czas - findMaxLoop");
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  console.timeEnd("czas - findMaxLoop");
  return max;
}

function findMaxMath(array: number[]): number {
  console.time("czas - findMaxMath");
  const number = Math.max(...array);
  console.timeEnd("czas - findMaxMath");
  return number;
}

export function findMax(): void {
  // Napisz funkcję, która znajdzie największą liczbę w podanej tablicy.
  const numbers = [10, 25, 3, 99, 47, 12];

  console.log("findMaxLoop: ", findMaxLoop(numbers)); // 99 (0.162ms)
  console.log("findMaxMath: ", findMaxMath(numbers)); // 99 (0.137ms)

  // Wieksze liczby wywołują błąd z Math.max() z powodu przekroczenia maksymalnego rozmiaru (przynajmniej na mojej maszynie)
  const mockArray: number[] = Array.from({ length: 115000 }, (_, i) => i + 1);
  console.log("findMaxLoop: ", findMaxLoop(mockArray)); // 115000 (2.083ms)
  console.log("findMaxMath: ", findMaxMath(mockArray)); // 115000 (1.399ms)
}
