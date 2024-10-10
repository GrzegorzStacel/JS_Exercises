// Napisz funkcję, która wykonuje następujące operacje w podanej kolejności:
// 1. Filtruje klientów, aby znaleźć tych, którzy mają więcej niż 30 lat.
// 2. Sortuje tych klientów według ich wydatków w kolejności malejącej.
// 3. Oblicza sumę wydatków tych klientów.

import { Customer } from "../../indexArrays.js";
import { filterClientsByAge, sortByPurchaseAmount, sumPurchaseAmount } from "./analyzeUtils.js";

export function analyzeCustomerData(customers: Customer[], ageLimit: number): void {
  const filteredCustomers = filterClientsByAge(customers, ageLimit);
  const sortedCustomers = sortByPurchaseAmount(filteredCustomers);
  const totalPurchaseAmount = sumPurchaseAmount(sortedCustomers);

  console.log("Filtered and Sorted Customers:", sortedCustomers);
  console.log("Total Purchase Amount:", totalPurchaseAmount);
}
