import { sumArrayWithForEach, sumArrayWithReduce } from "../sumUtils.js";

describe("Testowanie funkcji zsumowującej wszystkie liczby w tablicy", () => {
  const numbers = [5, 2, 8, 9, 10, 1];

  it("Zsumuj liczby w tablicy za pomocą pętli ForEach", () => {
    const result = 35;

    expect(sumArrayWithForEach(numbers)).toBe(result);
  });

  it("Zsumuj liczby w tablicy za pomocą funkcji reduce", () => {
    const result = 35;

    expect(sumArrayWithReduce(numbers)).toBe(result);
  });
});
