import { action, makeObservable, observable } from 'mobx';
import { Order, makeDemoOrders } from './models';

export class Store {
  ui: UI;

  @observable page = 'orders';
  @observable orders: Order[] = [];

  constructor() {
    this.ui = new UI(this);
    this.orders = makeDemoOrders(this);

    makeObservable(this);
  }
}

class UI {
  store: Store;

  @observable drawerOpen = false;

  constructor(store: Store) {
    this.store = store;

    makeObservable(this);
  }

  @action toggleDrawer(value?: boolean) {
    this.drawerOpen = value ?? !this.drawerOpen;
  }
}