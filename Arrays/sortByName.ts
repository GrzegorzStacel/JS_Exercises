type Student = {
  name: string;
  age: number;
};

export function sortByName(): void {
  // Masz tablicę obiektów studentów. Posortuj ich alfabetycznie według imienia.
  const students: Student[] = [
    { name: "zAnna", age: 22 },
    { name: "John", age: 19 },
    { name: "Mike", age: 25 },
    { name: "Zara", age: 21 },
  ];
  console.log(sort(students)); // 13.191ms
  console.log(students);
}

// TODO przerobić funkcję na bardziej elastyczną 
function sort(students: Student[]): Student[] {
  console.time("czas - sort");
  const sortedArray = students.slice().sort((a, b) => a.name.localeCompare(b.name, "pl", { sensitivity: "base" }));

  console.timeEnd("czas - sort");
  return sortedArray;
}
