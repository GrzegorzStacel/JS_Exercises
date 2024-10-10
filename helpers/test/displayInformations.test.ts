import chalk from "chalk";
import { displayInformations } from "../displayInformations.js";

describe("Testowanie funkcji displayInformations", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Powinna wyświetlić komunikat dla jednego parametru.", () => {
    const functionName = "myFunction";

    displayInformations(functionName);

    expect(console.log).toHaveBeenCalledWith(chalk.red.underline(`Koniec zadania ${functionName}'\n\n\n`));
  });

  it("Powinna wyświetlić komunikat dla dwóch parametrów.", () => {
    const functionName = "myFunction";
    const taksName = "myTask";

    displayInformations(functionName, taksName);

    expect(console.log).toHaveBeenCalledWith(chalk.greenBright.bold(`\n\n${taksName}`));
    expect(console.log).toHaveBeenCalledWith(chalk.underline.greenBright(`Rozpoczynam zadanie '${functionName}:'\n`));
  });
});
