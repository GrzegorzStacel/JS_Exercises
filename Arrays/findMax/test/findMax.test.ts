import { findMaxForLoop, findMaxMath } from "../findmaxUtils.js";

describe("Testowanie funkcji do znalezienia największej liczby", () => {
  const smallNumbers = [10, 25, 3, 99, 47, 12];
  const largeNumbers = Array.from({ length: 115000 }, (_, i) => i + 1);
  const expectedMaxSmall = 99;
  const expectedMaxLarge = 115000;

  it("Funkcja findMaxForLoop powinna zwrócić największą liczbę z małej tablicy.", () => {
    expect(findMaxForLoop(smallNumbers)).toBe(expectedMaxSmall);
  });

  it("Funkcja findMaxMath powinna zwrócić największą liczbę z małej tablicy.", () => {
    expect(findMaxMath(smallNumbers)).toBe(expectedMaxSmall);
  });

  it("Funkcja findMaxForLoop powinna zwrócić największą liczbę z dużej tablicy.", () => {
    expect(findMaxForLoop(largeNumbers)).toBe(expectedMaxLarge);
  });

  it("Funkcja findMaxMath powinna zwrócić największą liczbę z dużej tablicy.", () => {
    expect(findMaxMath(largeNumbers)).toBe(expectedMaxLarge);
  });
});
