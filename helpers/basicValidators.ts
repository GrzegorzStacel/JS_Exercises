export function basicValidatorString(string: string) {
  if (typeof string !== "string" || string.trim() === "") {
    console.warn("\nInvalid string:", string);
    return false;
  }

  return true;
}

export function basicValidatorNumber(number: number) {
  if (typeof number !== "number" || number <= 0 || isNaN(number)) {
    console.warn("\nInvalid number: ", number);
    return false;
  }

  return true;
}
