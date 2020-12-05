import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import { Store } from './store';

configure({
  enforceActions: 'never',
});


const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;

export function useStore() {
  return useContext(StoreContext);
}
