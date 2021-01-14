import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { CloseIcon, MenuIcon, TuneIcon, LogoutIcon } from '../../components/icons';
import { useStore } from '../../store';
import { OrderStatus } from '../../store/models';

export const MainLayout = ({ children, toolbar }) => (
  <div className="relative flex flex-col h-screen">
    <Drawer/>
    <Header toolbar={toolbar}/>
    {children}
  </div>
);

const Header = ({toolbar}) => {
  const store = useStore();
  return (
    <header className="flex items-center bg-white shadow-sm px-4 py-2 z-10">
      <button className="flex justify-center items-center rounded-full hover:bg-gray-100 focus:outline-none transition-colors w-10 h-10 -mx-2 -my-1" onClick={()=> store.ui.toggleDrawer()}>
        <MenuIcon/>
      </button>
      {toolbar}
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
            <NavItem page="orders">Zamówienia</NavItem>
            <NavItem page="turbos">Turbosprężarki</NavItem>
            <NavItem page="parts">Części</NavItem>
            <NavItem page="reasons">Powody usterek</NavItem>
          </nav>

          <div className="flex-1"/>

          <nav className="mb-4">
            <NavItem leading={<TuneIcon/>}>Ustawienia</NavItem>
            <NavItem leading={<LogoutIcon/>} onClick={()=> store.logout()}>Wyloguj</NavItem>
          </nav>
        </div>
      </aside>
    </>
  );
});

const NavItem = (({page, leading, children, onClick}) => {
  const store = useStore();
  const active = page === store.ui.page;
  if (page)
    onClick = () => {
      store.ui.goTo(page);
      store.ui.toggleDrawer(false);
    }
  return (
    <div role="button" onClick={onClick} className={clsx('flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer', {'font-bold': active})}>
      {leading &&
        <span className="inline-block w-8">{leading}</span>
      }
      {children}
    </div>
  );
});