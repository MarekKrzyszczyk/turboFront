import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { OrdersPage } from "./pages/OrdersPage";
import { PartsPage } from "./pages/PartsPage";
import { TurbosPage } from "./pages/TurbosPage";
import { ReasonsPage } from "./pages/ReasonsPage";

export const App = observer(() => {
  const store = useStore()
  const page = store.ui.page;

  if (!store.isLoggedIn) {
    return <LoginPage/>;
  }
  if (page === 'orders') return <OrdersPage/>;
  if (page === 'parts') return <PartsPage/>;
  if (page === 'turbos') return <TurbosPage/>;
  if (page === 'reasons') return <ReasonsPage/>;
  return <NotFoundPage/>;
});
