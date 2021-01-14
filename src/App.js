import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import { LoginPage } from "./pages/LoginPage";
import { OrderPage } from "./pages/OrderPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = observer(() => {
  const store = useStore()
  if (!store.isLoggedIn) {
    return <LoginPage/>;
  }
  if (store.page === 'orders')
    return <OrderPage/>;
  return <NotFoundPage/>;
});
