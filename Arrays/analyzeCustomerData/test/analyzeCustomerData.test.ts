import { filterClientsByAge, sortByPurchaseAmount, sumPurchaseAmount } from "../analyzeUtils.js";

describe("Testowanie funkcji do analizowania danych klientów", () => {
  const customers = [
    { name: "John Doe", age: 35, purchaseAmount: 1200 },
    { name: "Jane Smith", age: 28, purchaseAmount: 800 },
    { name: "Alice Johnson", age: 45, purchaseAmount: 1500 },
    { name: "Bob Brown", age: 32, purchaseAmount: 950 },
  ];

  it("Powinna posortować dane klientów według wieku, powyżej 30 lat.", () => {
    const expectedResult = [
      { name: "John Doe", age: 35, purchaseAmount: 1200 },
      { name: "Alice Johnson", age: 45, purchaseAmount: 1500 },
      { name: "Bob Brown", age: 32, purchaseAmount: 950 },
    ];

    expect(filterClientsByAge(customers, 30)).toEqual(expectedResult);
  });

  it("Powinna posortować klientów według wartości ich zakupów - malejąco.", () => {
    const expectedResult = [
      { name: "Alice Johnson", age: 45, purchaseAmount: 1500 },
      { name: "John Doe", age: 35, purchaseAmount: 1200 },
      { name: "Bob Brown", age: 32, purchaseAmount: 950 },
      { name: "Jane Smith", age: 28, purchaseAmount: 800 },
    ];

    expect(sortByPurchaseAmount(customers)).toEqual(expectedResult);
  });

  it("Powinna zsumować wartość wszystkich zakupów.", () => {
    const expectedResult = 4450;

    expect(sumPurchaseAmount(customers)).toBe(expectedResult);
  });
});
