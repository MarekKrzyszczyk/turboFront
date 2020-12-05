import { makeObservable, observable } from "mobx";
import { Store } from "./store";


export enum OrderStatus {
  new,
  inProgress,
  done,
};


export class Order {
  store: Store;

  @observable id: number;
  @observable status: OrderStatus;

  constructor({store, id, status}: {store: Store, id: number, status: OrderStatus}) {
    this.store = store;
    this.id = id;
    this.status = status;

    makeObservable(this);
  }
}

export function makeDemoOrders(store: Store) {
  return [
    new Order({store, id: 1, status: OrderStatus.new}),
    new Order({store, id: 2, status: OrderStatus.inProgress}),
    new Order({store, id: 3, status: OrderStatus.new}),
    new Order({store, id: 4, status: OrderStatus.new}),
    new Order({store, id: 5, status: OrderStatus.done}),
    new Order({store, id: 6, status: OrderStatus.done}),
    new Order({store, id: 7, status: OrderStatus.done}),
    new Order({store, id: 8, status: OrderStatus.done}),
    new Order({store, id: 9, status: OrderStatus.done}),
    new Order({store, id: 10, status: OrderStatus.done}),
    new Order({store, id: 11, status: OrderStatus.done}),
    new Order({store, id: 12, status: OrderStatus.done}),
    new Order({store, id: 13, status: OrderStatus.done}),
    new Order({store, id: 14, status: OrderStatus.done}),
    new Order({store, id: 15, status: OrderStatus.done}),
    new Order({store, id: 16, status: OrderStatus.done}),
  ];
}