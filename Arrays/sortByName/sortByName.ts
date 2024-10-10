//
//
// Masz tablicę obiektów studentów. Posortuj ich alfabetycznie według imienia.
//
//

import { displayInformations } from "../../helpers/displayInformations.js";
import { displayResult } from "../../helpers/displayResult.js";
import { measureFunctionTime } from "../../helpers/measureFunctionTime.js";
import { sortByKey } from "./sortByNameUtils.js";

type Student = {
  name: string;
  age: number;
};

function measureSortByNamePerformance(students: Student[], findType: "name" | "age"): void {
  const result = measureFunctionTime(() => sortByKey(students, findType), students, `Czas dla metody 'sort' - wg. ${findType}`);

  displayResult(`Posortowana tablica według "${findType}"\n`, result);
}

export function sortByName(): void {
  displayInformations("sortByName", "Masz tablicę obiektów studentów. Posortuj ich alfabetycznie według imienia.");

  const students: Student[] = [
    { name: "zAnna", age: 22 },
    { name: "John", age: 19 },
    { name: "Mike", age: 25 },
    { name: "Zara", age: 21 },
  ];

  measureSortByNamePerformance(students, "name");
  measureSortByNamePerformance(students, "age");

  displayInformations("sortByName");
}
