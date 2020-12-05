import { action, makeObservable, observable } from 'mobx';
import { storeDecorator } from 'mobx/dist/internal';

export class Store {
  ui: UI;

  @observable page = 'orders';

  constructor() {
    this.ui = new UI(this);

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