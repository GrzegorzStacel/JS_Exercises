function sumArrayWithForEach(numbers: number[]): number {
  console.time("czas - sumArrayWithForEach");

  let sum: number = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  console.timeEnd("czas - sumArrayWithForEach");
  return sum;
}

function sumArrayWithReduce(numbers: number[]): number {
  console.time("czas - sumArrayWithReduce");
  const sum = numbers.reduce((sum, number) => sum + number, 0);
  console.timeEnd("czas - sumArrayWithReduce");
  return sum;
}

export function sum(): void {
  // Napisz funkcję, która zsumuje wszystkie liczby w tablicy.
  const numbers = [5, 10, 15, 20];
  console.log(sumArrayWithForEach(numbers)); // 50 (0.221ms)
  console.log(sumArrayWithReduce(numbers)); //  50 (0.129ms)

  const tmpNumbers: number[] = Array.from({ length: 10000000 }, (_, i) => i + 1);
  console.log(sumArrayWithForEach(tmpNumbers)); // 50000005000000 (277.03ms)
  console.log(sumArrayWithReduce(tmpNumbers)); // 50000005000000  (172.118ms)
}
