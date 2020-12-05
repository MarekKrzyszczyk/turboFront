import { OrderStatus } from "../store/models";

export function orderStatusName(status: OrderStatus) {
  return {
    [OrderStatus.new]: 'Nowe',
    [OrderStatus.inProgress]: 'W trakcie',
    [OrderStatus.done]: 'Gotowe',
  }[status];
}