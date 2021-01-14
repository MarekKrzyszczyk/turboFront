import { makeObservable, observable } from "mobx";


export const OrderStatus = {
  new: 'new',
  inProgress: 'inProgress',
  done: 'done',
};


export class Order {
  @observable status;

  constructor({store, id, status}) {
    this.store = store;
    this.id = id;
    this.status = status;
    makeObservable(this);
  }
}