import { removeEvenNumbers, sortDescending, sum } from "../multipleOperationsUtils.js";

describe("Testowanie funkcji do wykonywania kilku czynności na danych", () => {
  const numbers = [5, 8, 12, 3, 19, 1, 25, 7];

  it("Powinna usunąć z tablicy wszystkie parzyste liczby.", () => {
    const expectedResult = [5, 3, 19, 1, 25, 7];

    expect(removeEvenNumbers(numbers)).toEqual(expectedResult);
  });

  it("Powinna posortować liczby w kolejności malejącej.", () => {
    const expectedResult = [25, 19, 12, 8, 7, 5, 3, 1];

    expect(sortDescending(numbers)).toEqual(expectedResult);
  });

  it("Powinna obliczyć sumę wszystkich elementów.", () => {
    const expectedResult = 80;

    expect(sum(numbers)).toBe(expectedResult);
  });
});
