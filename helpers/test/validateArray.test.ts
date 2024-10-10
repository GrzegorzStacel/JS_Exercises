import { validateArray } from "../validateArray.js";

describe("Testowanie funkcji do walidacji tablic & tablic obiektów.", () => {
  it("Powinna rzucić błąd, jeśli tablica jest pusta", () => {
    const emptyArray: number[] = [];

    expect(() => validateArray(emptyArray)).toThrowErrorMatchingInlineSnapshot(`"Array is empty"`);
  });

  it("Nie powinna rzucać błędu, jeśli tablica nie jest pusta.", () => {
    const nonEmptyArray: number[] = [1, 2, 3];

    expect(() => validateArray(nonEmptyArray)).not.toThrow();
  });

  it("Powinna rzucić błąd, jeśli tablica obiektów jest pusta.", () => {
    const emptyObjectArray: object[] = [];

    expect(() => validateArray(emptyObjectArray)).toThrowErrorMatchingInlineSnapshot(`"Array is empty"`);
  });

  it("Nie powinna rzucać błędu, jeśli tablica obiektów nie jest pusta.", () => {
    const nonEmptyObjectArray: object[] = [{}, {}, {}];

    expect(() => validateArray(nonEmptyObjectArray)).not.toThrow();
  });
});
