import { Order, OrderStatus } from "../../../index.js";
import { isValidOrderStatus, validateOrderArray, getOrdersByStatus, sortOrdersByAmount, sumOrderAmounts } from "../workWithOrdersUtils.js";

describe("Testowanie funkcji, która ma tablicę obiektów reprezentujących zamówienia w e-commerce", () => {
  const orders = [
    { id: 1, amount: 150, status: OrderStatus.Completed },
    { id: 2, amount: 200, status: OrderStatus.Pending },
    { id: 3, amount: 120, status: OrderStatus.Completed },
    { id: 5, amount: 80, status: OrderStatus.Cancelled },
  ];

  it("Powinna przefiltrować zamówienia na podstawie statusu 'completed'", () => {
    const expectedResult = [
      { id: 1, amount: 150, status: OrderStatus.Completed },
      { id: 3, amount: 120, status: OrderStatus.Completed },
    ];

    expect(getOrdersByStatus(orders, OrderStatus.Completed)).toStrictEqual(expectedResult);
  });

  it("Powinna agregować całkowitą kwotę zamówień w statusie 'completed'", () => {
    const completedOrders = [
      { id: 1, amount: 150, status: OrderStatus.Completed },
      { id: 3, amount: 120, status: OrderStatus.Completed },
    ];

    const expectedResult = 270;

    expect(sumOrderAmounts(completedOrders)).toBe(expectedResult);
  });

  it("Powinna posortować zamówienia według kwoty - malejąco", () => {
    const expectedResult = [
      { id: 2, amount: 200, status: OrderStatus.Pending },
      { id: 1, amount: 150, status: OrderStatus.Completed },
      { id: 3, amount: 120, status: OrderStatus.Completed },
      { id: 5, amount: 80, status: OrderStatus.Cancelled },
    ];

    expect(sortOrdersByAmount(orders)).toStrictEqual(expectedResult);
  });

  it("Nie powinna rzucić błędu dla poprawnego statusu.", () => {
    expect(() => isValidOrderStatus(OrderStatus.Cancelled)).not.toThrow();
    expect(() => isValidOrderStatus(OrderStatus.Completed)).not.toThrow();
    expect(() => isValidOrderStatus(OrderStatus.Pending)).not.toThrow();
  });

  it("Powinna rzucić błąd dla niepoprawnego statusu", () => {
    expect(() => isValidOrderStatus("invalidStatus" as OrderStatus)).toThrowErrorMatchingInlineSnapshot(`"Invalid order status: invalidStatus"`);
  });

  it("Nie powinna rzucić błędu dla poprawnej tablicy z zamówieniami.", () => {
    const orders: Order[] = [
      { id: 1, amount: 150, status: OrderStatus.Completed },
      { id: 2, amount: 200, status: OrderStatus.Pending },
    ];

    expect(() => validateOrderArray(orders)).not.toThrow();
  });

  it("Powinna rzucić błędem dla pustej tablicy z zamówieniami.", () => {
    expect(() => validateOrderArray([])).toThrowErrorMatchingInlineSnapshot(`"No orders provided"`);
  });
});
