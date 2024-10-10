import chalk from "chalk";
import { displayResult } from "../displayResult.js";

describe("Testowanie funkcji do wyświetlania wyniku funkcji.", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "dir").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Powinna wyświetlić komunikat dla jednego parametru.", () => {
    const param1 = "result";

    displayResult(param1);

    expect(console.log).toHaveBeenCalledWith(chalk.green(param1));
  });

  it("Powinna wyświetlić komunikat dla dwóch parametrów.", () => {
    const param1 = "Test message with array";
    const param2 = [1, 2, 3, 5, 9];

    displayResult(param1, param2);

    expect(console.dir).toHaveBeenCalledWith(param2, { maxArrayLength: 10 });
    expect(console.log).toHaveBeenCalledWith(chalk.green(param1));
  });
});
