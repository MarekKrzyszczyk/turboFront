import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { OrderStatus } from '../store/models';
import { MainLayout } from './layouts/MainLayout';
import { AccountHardHatIcon, ClockOutlineIcon, AccountTieIcon, CarTurbochargerIcon, CheckboxBlankCircleOutline, ProgressWrenchIcon, CheckCircleOutlineIcon, FaceAgentIcon, CommentTextOutlineIcon, PlusIcon, MagnifyIcon } from '../components/icons';
import { orderStatusName } from '../utils/helpers';
import backgroundImage from '../media/turbo.jpg';
import { showOrderDialog } from './OrderDialog';


export const OrdersPage = observer(() => {
  const store = useStore();
  const view = store.ui.ordersView;

  const toolbar = (
    <>
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
    </>
  );
  return (
    <MainLayout toolbar={toolbar}>
      <div className="relative flex-1 bg-gray-500 overflow-hidden">
        <div className="relative h-full grid justify-start items-start place-content-start z-10 p-2 overflow-scroll" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}>
          {view.filteredOrders.map(order => (
            <OrderItem key={order.id} order={order}/>
          ))}
        </div>

        {/* background image */}
        <picture className="absolute inset-0 opacity-10 z-0">
          <img src={backgroundImage} className="object-cover w-full h-full" alt=""/>
        </picture>
      </div>
    </MainLayout>
  );
});

const OrderItem = observer(({order}) => {
  const store = useStore();
  const statusClassName = clsx({
    'bg-blue-300': order.status === OrderStatus.new,
    'bg-yellow-300': order.status === OrderStatus.inProgress,
    'bg-green-400': order.status === OrderStatus.done,
  });
  const statusIcon = {
    [OrderStatus.new]: <CheckboxBlankCircleOutline size={18}/>,
    [OrderStatus.inProgress]: <ProgressWrenchIcon size={18}/>,
    [OrderStatus.done]: <CheckCircleOutlineIcon size={18}/>,
  }[order.status];
  return (
    <div role="button" className="rounded shadow-md hover:shadow-xl cursor-pointer transition-all bg-white m-2 text-sm opacity-90 hover:opacity-100" onClick={()=> showOrderDialog({store, order})}>
      <header className="flex items-stretch bg-gray-100 rounded rounded-b-none">
        <div className="flex-1 px-2 py-1 font-semibold">000{order.id}</div>
        <div className={clsx('flex items-center justify-center px-2 rounded-tr-sm', statusClassName)}>
          <div className="flex items-center text-xs opacity-70"><span className="opacity-70">{statusIcon}</span>&nbsp;{orderStatusName(order.status)}</div>
        </div>
      </header>
      <div className="p-2">
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><ClockOutlineIcon size={24}/></div>
          <div className="flex-1">12:54</div>
        </div>
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><AccountTieIcon size={24}/></div>
          <div className="flex-1">Jan Kowalski</div>
        </div>
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><CarTurbochargerIcon size={24}/></div>
          <div className="flex-1">Audi / 871231011</div>
        </div>
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><AccountHardHatIcon size={24}/></div>
          <div className="flex-1">-</div>
        </div>
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><FaceAgentIcon size={24}/></div>
          <div className="flex-1">-</div>
        </div>
        <div className="flex items-center my-1">
          <div className="w-8 text-gray-400"><CommentTextOutlineIcon size={24}/></div>
          <div className="flex-1">-</div>
        </div>
      </div>
    </div>
  );
});

const OrderStatusFilter = () => {
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