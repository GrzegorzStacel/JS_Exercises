import { filterEvenNumbers, filterEvenNumbersByFilter } from "../filterUtils";
import { measureFilteringPerformance } from "../evenNumber.js";

describe("Testowanie funkcji do filtrowania liczb parzystych", () => {
  const inputArray = [1, 2, 3, 4, 5, 6];

  it("Powinna zwrócić tylko liczby parzyste dla funkcji filterEvenNumbers", () => {
    const expectedOutput = [2, 4, 6];

    const result = filterEvenNumbers(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  it("Powinna zwrócić tylko liczby parzyste dla funkcji filterEvenNumbersByFilter", () => {
    const expectedOutput = [2, 4, 6];

    const result = filterEvenNumbersByFilter(inputArray);

    expect(result).toEqual(expectedOutput);
  });

  it("Powinna zwrócić pustą tablicę, gdy nie ma liczb parzystych", () => {
    const inputArray = [1, 3, 5, 7];

    const result = filterEvenNumbers(inputArray);

    expect(result).toEqual([]);
  });

  it("Powinna poprawnie działać z bardzo dużą tablicą", () => {
    const veryLongArray = Array.from({ length: 1000000 }, (_, value) => value + 1);

    expect(() => measureFilteringPerformance(veryLongArray, "filter")).not.toThrow();
  });
});
