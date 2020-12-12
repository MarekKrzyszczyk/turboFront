import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { AccountOutlineIcon, CloseIcon, MenuIcon, MagnifyIcon, TuneIcon, PlusIcon } from '../../components/icons';
import { useStore } from '../../store';
import { OrderStatus } from '../../store/models';

export const MainLayout = ({ children }) => (
  <div className="relative flex flex-col h-screen">
    <Drawer/>
    <Header/>
    {children}
  </div>
);

const Header = () => {
  const store = useStore();
  return (
    <header className="flex items-center bg-white shadow-sm px-4 py-2 z-10">
      <button className="flex justify-center items-center rounded-full hover:bg-gray-100 focus:outline-none transition-colors w-10 h-10 -mx-2 -my-1" onClick={()=> store.ui.toggleDrawer()}>
        <MenuIcon/>
      </button>

      <div className="flex items-center bg-gray-100 text-gray-500 focus-within:text-gray-900 focus-within:shadow-inner rounded-full ml-20 w-56 focus-within:w-96 transition-all">
        <div className="px-2 opacity-80"><MagnifyIcon/></div>
        <div className="flex-1">
          <input type="text" placeholder="Szukaj" className="bg-transparent py-1 w-full rounded-full border-0 focus:outline-none"/>
        </div>
      </div>

      <div className="flex-grow"/>

      <div className="ml-4">
        <OrderStatusFilter/>
      </div>

      <div className="ml-4">
        <button className="flex items-center bg-green-400 hover:bg-green-500 active:bg-green-600 focus:outline-none transition-colors text-white font-semibold rounded-full pl-2 pr-3 py-1 whitespace-nowrap"><PlusIcon/><span className="pl-1">Nowe zgłoszenie</span></button>
      </div>
    </header>
  );
}

const Drawer = observer(() => {
  const store = useStore();
  const drawerOpen = store.ui.drawerOpen;
  const style = {
    width: 320,
    left: drawerOpen ? 0 : -320,
    transition: 'left .3s ease-in-out',
  }
  return (
    <>
      {/* overlay */}
      <div className={clsx('absolute inset-0 bg-black z-20 transition-opacity', drawerOpen ? 'opacity-50' : 'pointer-events-none opacity-0')} onClick={()=> store.ui.toggleDrawer(false)}/>

      <aside className="absolute top-0 bottom-0 bg-white shadow-lg z-30" style={style}>
        {/* close button */}
        <div className="absolute top-1 right-1">
          <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors" onClick={()=> store.ui.toggleDrawer(false)}><CloseIcon/></button>
        </div>

        <div className="flex flex-col h-screen">
          <nav className="mt-20">
            <NavItem>Zamówienia</NavItem>
            <NavItem>Turbosprężarki</NavItem>
            <NavItem>Części</NavItem>
            <NavItem>Powody usterek</NavItem>
          </nav>

          <div className="flex-1"/>

          <nav className="mb-4">
            <NavItem leading={<TuneIcon/>}>Ustawienia</NavItem>
            <NavItem leading={<AccountOutlineIcon/>}>Jan Nowak</NavItem>
          </nav>
        </div>
      </aside>
    </>
  );
});

const NavItem = ({leading, children}) => (
  <div role="button" className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
    {leading &&
      <span className="inline-block w-8">{leading}</span>
    }
    {children}
  </div>
);

const OrderStatusFilter: FC = () => {
  const store = useStore();
  const view = store.ui.ordersView;

  function setFilter(status) {
    view.statusFilter = status !== null ? [status] : null;
  }

  function props(status) {
    return {
      className: clsx('px-3 py-1 focus:outline-none', {
        'border-l': status !== null,
        'bg-gray-300': status === null && view.statusFilter === null,
        'bg-blue-300': status === OrderStatus.new && view.statusFilter?.includes(status),
        'bg-yellow-300': status === OrderStatus.inProgress && view.statusFilter?.includes(status),
        'bg-green-300': status === OrderStatus.done && view.statusFilter?.includes(status),
      }),
      onClick: ()=> setFilter(status),
    }
  }

  return (
    <div className="flex border rounded text-xs whitespace-nowrap">
      <button {...props(null)}>Wszystkie</button>
      <button {...props(OrderStatus.new)}>Nowe</button>
      <button {...props(OrderStatus.inProgress)}>W trakcie</button>
      <button {...props(OrderStatus.done)}>Gotowe</button>
    </div>
  )
};