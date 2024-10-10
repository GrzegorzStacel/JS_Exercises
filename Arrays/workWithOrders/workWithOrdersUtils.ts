import { Order, OrderStatus } from "../../index.js";

export function getOrdersByStatus(orders: Order[], statusType: OrderStatus): Order[] {
  return orders.filter((order) => order.status === statusType);
}

export function sortOrdersByAmount(filteredOrders: Order[]): Order[] {
  return [...filteredOrders].sort((a, b) => b.amount - a.amount);
}

export function sumOrderAmounts(filteredOrders: Order[]): number {
  return filteredOrders.reduce((total, current) => total + current.amount, 0);
}

export function isValidOrderStatus(status: OrderStatus): asserts status is OrderStatus {
  console.log("Sprawdzany status:", status);
  if (!Object.values(OrderStatus).includes(status)) throw new Error(`Invalid order status: ${status}`);
}

export function validateOrderArray(orders: Order[]): asserts orders is Order[] {
  if (!orders || orders.length === 0) throw new Error("No orders provided");
}
