import { action, computed, makeObservable, observable } from 'mobx';
import { makeDemoOrders } from './models';

export class Store {
  @observable isLoggedIn = false;

  @observable page = 'orders';
  @observable orders = [];

  constructor() {
    this.ui = new UI(this);
    this.orders = makeDemoOrders(this);
    makeObservable(this);
  }

  @action tryLogin(login, password) {
    if (login === 'turbo' && password === 'turbo') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  @action logout() {
    this.isLoggedIn = false;
  }
}

class UI {
  @observable drawerOpen = false;

  constructor(store) {
    this.store = store;
    this.ordersView = new OrdersView(this);
    makeObservable(this);
  }

  @action toggleDrawer(value) {
    this.drawerOpen = value ?? !this.drawerOpen;
  }
}

class OrdersView {
  @observable statusFilter;

  constructor(ui) {
    this.ui = ui;
    makeObservable(this);
  }

  get store() { return this.ui.store; }

  @computed get filteredOrders() {
    if (!this.statusFilter)
      return this.store.orders;
    return this.store.orders.filter(order => this.statusFilter.includes(order.status));
  }
}