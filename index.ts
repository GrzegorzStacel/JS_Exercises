import { evenNumber } from "./Arrays/evenNumber/evenNumber.js";
import { findMax } from "./Arrays/findMax/findMax.js";
import { sum } from "./Arrays/sum/sum.js";
import { sortByName } from "./Arrays/sortByName/sortByName.js";
import { multipleOperations } from "./Arrays/multipleOperations/multipleOperations.js";
import { analyzeCustomerData } from "./Arrays/analyzeCustomerData/analyzeCustomerData.js";
import { processOrdersByStatus } from "./Arrays/workWithOrders/wrokWithOrders.js";

const smallArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const veryLongArray = Array.from({ length: 1000000 }, (_, value) => value + 1);

// Napisz funkcję, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko liczby parzyste.
// evenNumber(smallArray, veryLongArray);

// Napisz funkcję, która znajdzie największą liczbę w podanej tablicy.
// findMax();

// Napisz funkcję, która zsumuje wszystkie liczby w tablicy.
// sum(veryLongArray);

// Masz tablicę obiektów studentów. Posortuj ich alfabetycznie według imienia.
// sortByName();

// Napisz funkcję, która:
// Usunie wszystkie liczby parzyste z tablicy.
// Posortuje pozostałe liczby w kolejności malejącej.
// Na końcu obliczy sumę pozostałych elementów.
// multipleOperations();

// Napisz funkcję, która wykonuje następujące operacje w podanej kolejności:
// 1. Filtruje klientów, aby znaleźć tych, którzy mają więcej niż 30 lat.
// 2. Sortuje tych klientów według ich wydatków w kolejności malejącej.
// 3. Oblicza sumę wydatków tych klientów.

export type Customer = {
  name: string;
  age: number;
  purchaseAmount: number;
};

// const customers: Customer[] = [
//   { name: "John Doe", age: 35, purchaseAmount: 1200 },
//   { name: "Jane Smith", age: 28, purchaseAmount: 800 },
//   { name: "Alice Johnson", age: 45, purchaseAmount: 1500 },
//   { name: "Bob Brown", age: 32, purchaseAmount: 950 },
// ];

// analyzeCustomerData(customers, 30);

// Masz tablicę obiektów reprezentujących zamówienia w e-commerce. Każde zamówienie ma id, amount (kwotę) i status (status zamówienia). Napisz funkcję, która:

// 1. Filtruje zamówienia na podstawie statusu (np. "completed").
// 2. Agreguje całkowitą kwotę zamówień w określonym statusie.
// 3. Sortuje te zamówienia według kwoty malejąco.

export enum OrderStatus {
  Completed = "completed",
  Pending = "pending",
  Cancelled = "cancelled",
}

export type Order = {
  id: number;
  amount: number;
  status: OrderStatus;
};

const orders: Order[] = [
  { id: 1, amount: 150, status: OrderStatus.Completed },
  { id: 2, amount: 200, status: OrderStatus.Pending },
  { id: 3, amount: 120, status: OrderStatus.Completed },
  { id: 4, amount: 300, status: OrderStatus.Completed },
  { id: 5, amount: 80, status: OrderStatus.Cancelled },
  { id: 6, amount: 250, status: OrderStatus.Pending },
  { id: 7, amount: 90, status: OrderStatus.Completed },
];

const { sortedOrders, totalAmount } = processOrdersByStatus(orders, OrderStatus.Completed);
console.log(`Orders with status '${OrderStatus.Completed}':`, sortedOrders);
console.log(`Total amount:`, totalAmount);
