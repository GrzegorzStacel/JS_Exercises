import { Order, OrderStatus } from "../index.js";

type AnalysisResult = {
  sortedOrders: Order[];
  totalAmount: number;
};

function getOrdersByStatus(orders: Order[], statusType: OrderStatus): Order[] {
  return orders.filter((order) => order.status === statusType);
}

function sortOrdersByAmount(filteredOrders: Order[]): Order[] {
  return [...filteredOrders].sort((a, b) => b.amount - a.amount);
}

function sumOrderAmounts(filteredOrders: Order[]): number {
  return filteredOrders.reduce((total, current) => total + current.amount, 0);
}

function isValidOrderStatus(status: OrderStatus): asserts status is OrderStatus {
  if (!Object.values(OrderStatus).includes(status)) throw new Error(`Invalid order status: ${status}`);
}

function validateOrderArray(orders: Order[]): asserts orders is Order[] {
  if (!orders || orders.length === 0) throw new Error("No orders provided");
}

export function processOrdersByStatus(orders: Order[], orderStatus: OrderStatus): AnalysisResult {
  isValidOrderStatus(orderStatus);
  validateOrderArray(orders);

  const filteredOrders = getOrdersByStatus(orders, orderStatus);
  if (filteredOrders.length === 0) {
    console.warn(`No orders found with status "${orderStatus}"`);
    return { sortedOrders: [], totalAmount: 0 };
  }

  const sortedOrders = sortOrdersByAmount(filteredOrders);
  const totalAmount = sumOrderAmounts(sortedOrders);

  return { sortedOrders, totalAmount };
}
