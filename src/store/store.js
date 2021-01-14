import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { API } from './api';

export class Store {
  @observable isLoggedIn = false;

  @observable parts = [];
  @observable turbos = [];
  @observable reasons = [];
  @observable orders = [];

  constructor() {
    this.api = new API(this);
    this.ui = new UI(this);

    this.restore();
    this.fetchInitialData();

    makeObservable(this);
    reaction(() => {
        return {
          auth: {
            isLoggedIn: this.isLoggedIn,
          },
        };
      },
      snapshot => localStorage.setItem('settings', JSON.stringify(snapshot)),
    );
  }

  restore() {
    try {
      const settings = JSON.parse(localStorage.getItem('settings') || '{}');
      this.isLoggedIn = settings.auth?.isLoggedIn;
    } catch (err) {}
  }

  fetchInitialData() {
    this.api.getParts().then(parts => this.parts = parts);
    this.api.getReasons().then(reasons => this.reasons = reasons);
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
  @observable page = 'orders';
  @observable drawerOpen = false;

  constructor(store) {
    this.store = store;
    this.ordersView = new OrdersView(this);
    makeObservable(this);
  }

  @action toggleDrawer(value) {
    this.drawerOpen = value ?? !this.drawerOpen;
  }

  goTo(page) {
    this.page = page;
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