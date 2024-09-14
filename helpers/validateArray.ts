export function validateArray(array: number[] | object[]): void {
  if (array.length === 0) throw new Error("Array is empty");
}
