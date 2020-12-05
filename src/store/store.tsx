import { makeObservable, observable } from 'mobx';

export class Store {
  @observable page = 'orders';

  constructor() {
    makeObservable(this);
  }
}