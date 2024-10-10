import { sortByKey } from "../sortByNameUtils.js";

describe("Testowanie funkcji sortującej według imienia oraz wieku", () => {
  const array = [
    { name: "zAnna", age: 22 },
    { name: "John", age: 19 },
    { name: "Mike", age: 25 },
    { name: "Zara", age: 21 },
  ];

  it("Powinna posortować tablice według imienia", () => {
    const expectedResult = [
      { name: "John", age: 19 },
      { name: "Mike", age: 25 },
      { name: "Zara", age: 21 },
      { name: "zAnna", age: 22 },
    ];

    expect(sortByKey(array, "name")).toEqual(expectedResult);
  });

  it("Powinna posortować tablice według wieku", () => {
    const expectedResult = [
      { name: "John", age: 19 },
      { name: "Zara", age: 21 },
      { name: "zAnna", age: 22 },
      { name: "Mike", age: 25 },
    ];

    expect(sortByKey(array, "age")).toEqual(expectedResult);
  });
});
