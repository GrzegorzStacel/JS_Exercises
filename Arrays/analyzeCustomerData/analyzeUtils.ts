import { Customer } from "../../indexArrays.js";

export function filterClientsByAge(customers: Customer[], ageLimit: number): Customer[] {
  return customers.filter((customer) => customer.age > ageLimit);
}

export function sortByPurchaseAmount(customers: Customer[]): Customer[] {
  return [...customers].sort((a, b) => b.purchaseAmount - a.purchaseAmount);
}

export function sumPurchaseAmount(customers: Customer[]): number {
  return customers.reduce((total, current) => total + current.purchaseAmount, 0);
}
