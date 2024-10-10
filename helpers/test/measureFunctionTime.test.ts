import chalk from "chalk";
import { measureFunctionTime } from "../measureFunctionTime.js";

describe("Testowanie funkcji do odmierzenia czasu wykonywania się funkcji.", () => {
  beforeEach(() => {
    jest.spyOn(console, "time").mockImplementation(() => {});
    jest.spyOn(console, "timeEnd").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Powinien zmierzyćż czas i zwrócić poprawny wynik.", () => {
    const testFunction = (x: number) => x * 2;
    const testArg = 5;
    const testLabel = "Test Label";

    const result = measureFunctionTime(testFunction, testArg, testLabel);

    expect(result).toBe(10); // 5 * 2 = 10

    expect(console.time).toHaveBeenCalledWith(chalk.yellow(testLabel));
    expect(console.timeEnd).toHaveBeenCalledWith(chalk.yellow(testLabel));
  });
});
