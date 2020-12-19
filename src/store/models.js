import { makeObservable, observable } from "mobx";


export const OrderStatus = {
  new: 'new',
  inProgress: 'inProgress',
  done: 'done',
};


export class Order {
  @observable id;
  @observable status;

  constructor({store, id, status}) {
    this.store = store;
    this.id = id;
    this.status = status;

    makeObservable(this);
  }
}

export function makeDemoOrders(store) {
  return [
    new Order({store, id: 1, status: OrderStatus.new}),
    new Order({store, id: 2, status: OrderStatus.inProgress}),
    new Order({store, id: 3, status: OrderStatus.new}),
    new Order({store, id: 4, status: OrderStatus.new}),
    new Order({store, id: 5, status: OrderStatus.inProgress}),
    new Order({store, id: 6, status: OrderStatus.done}),
    new Order({store, id: 7, status: OrderStatus.done}),
    new Order({store, id: 8, status: OrderStatus.done}),
    new Order({store, id: 9, status: OrderStatus.done}),
  ];
}