import { action, computed, makeObservable, observable } from 'mobx';
import { Order, makeDemoOrders, OrderStatus } from './models';

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
  ordersView: OrdersView;

  @observable drawerOpen = false;

  constructor(store: Store) {
    this.store = store;
    this.ordersView = new OrdersView(this);
    makeObservable(this);
  }

  @action toggleDrawer(value?: boolean) {
    this.drawerOpen = value ?? !this.drawerOpen;
  }
}

class OrdersView {
  ui: UI;

  @observable statusFilter: OrderStatus[] | null = null;

  constructor(ui: UI) {
    this.ui = ui;
    makeObservable(this);
  }

  get store() { return this.ui.store; }

  @computed get filteredOrders() {
    if (!this.statusFilter)
      return this.store.orders;
    return this.store.orders.filter(order => this.statusFilter!.includes(order.status));
  }
}