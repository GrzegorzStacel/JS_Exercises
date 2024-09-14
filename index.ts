import { evenNumber } from "./Arrays/evenNumber.js";
import { findMax } from "./Arrays/findMax.js";
import { sum } from "./Arrays/sum.js";
import { sortByName } from "./Arrays/sortByName.js";

const smallArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const veryLongArray = Array.from({ length: 1000000 }, (_, value) => value + 1);

evenNumber(smallArray, veryLongArray);
// findMax();
// sum();
sortByName();
