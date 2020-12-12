import { createContext, useContext } from 'react';
import { configure } from 'mobx';

configure({
  enforceActions: 'never',
});


const StoreContext = createContext();
export const StoreProvider = StoreContext.Provider;

export function useStore() {
  return useContext(StoreContext);
}
