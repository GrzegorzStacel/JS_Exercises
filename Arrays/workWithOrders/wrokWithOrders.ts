import { Order, OrderStatus } from "../../indexArrays.js";
import { isValidOrderStatus, validateOrderArray, getOrdersByStatus, sortOrdersByAmount, sumOrderAmounts } from "./workWithOrdersUtils.js";

type AnalysisResult = {
  sortedOrders: Order[];
  totalAmount: number;
};

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
